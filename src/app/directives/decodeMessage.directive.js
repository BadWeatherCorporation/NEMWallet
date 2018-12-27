import { CoolStorageFactory, CoolTransportFactory } from 'cool-utils';
import nem from "nem-sdk";

function DecodeMessage(Wallet, Recipient, Alert, $timeout, $filter, $sanitize) {
    'ngInject';

    return {
        restrict:'E',
        scope: {
        	tx: '=',
            showDecodeMessage: '=',
            disableDecryption: '='
        },
        template: '<ng-include src="templateDecodeMessage"/>',
        link: (scope) => {
        	scope.templateDecodeMessage = 'layout/partials/decodeMessage.html';
            scope.common = nem.model.objects.get("common");
            scope.Wallet = Wallet;

            /**
             * Decode an encrypted message in a transaction
             *
             * @param {object} tx - A transaction object
             */
            scope.decode = (tx) => {
                // Get account private key
                if (!Wallet.decrypt(scope.common)) return;

                if (Wallet.algo != 'viewonly') {
                    // Create key pair
                    let kp = nem.crypto.keyPair.create(scope.common.privateKey);
                    // If not the sender, use signer public key for decryption
                    if (kp.publicKey.toString() !== tx.signer) {
                        scope.processDecode(tx.signer, tx);
                    } else {
                        // Get the recipient account data for the public key
                        Recipient.getAccount(tx.recipient).then((res) => {
                            $timeout(() => {
                                //
                                scope.processDecode(res.account.publicKey, tx);
                                return;
                            });
                        },
                        (err) => {
                            $timeout(() => {
                                // Reset common
                                scope.common = nem.model.objects.get("common");;
                                Alert.getAccountDataError(err.statusText);
                                return;
                            });
                        });
                    }
                } else {
                    // need to obtain both public keys now:
                    // TODO: this could happen/become part of the model right after login/account selection for 'viewonly' wallet 
                    const signerAddress = nem.utils.format.pubToAddress(tx.signer, Wallet.network);
                    new Promise((resolve) => {
                        if (Wallet.currentAccount.address === signerAddress) {
                            // we are signer/sender
                            if (Wallet.currentAccount.address === tx.recipient) {
                                // se are both sender and recipient, we can transport just the message
                                resolve(null);
                            } else {
                                // we need to obtain recipients pubkey now
                                Recipient.getAccount(tx.recipient).then((recipient) => {
                                    resolve(recipient.account.publicKey);
                                }, (err) => {
                                    reject(err);
                                });
                            }
                        } else {
                            // we are recipient, need to send senders pubkey to the other side
                            resolve(tx.signer);
                        }
                    }).then((pubkey) => {
                        const dlg = $("#generateQrModalDlg");
                        const iCoolStorage = CoolStorageFactory.createCoolStorageProxy('nis1');
                        const qrClientTransport = CoolTransportFactory.createClientTransport('qr', iCoolStorage);
                        qrClientTransport.setDestinations($("#qrSignStep1"), $("#qrSignStep2"));
                        iCoolStorage.setTransport(qrClientTransport);
                        if (dlg) {
                            dlg.modal("show").on("hide.bs.modal", function () {
                                $(this).off('hide.bs.modal');
                                qrClientTransport.cleanup();
                            });

                            iCoolStorage.decrypt(tx.message.payload, pubkey).then((decoded) => {
                                // TODO: make utility from code below
                                if (!decoded) return Alert.emptyDecodedMessage();
                                    
                                // Replace transaction message with decoded message
                                tx.message.type = 1;
                                tx.message.payload = decoded;
                                // Reset common
                                scope.common = nem.model.objects.get("common");
                                // Remove the the decode part of the template
                                $("#decodeTxMessage-" + tx.timeStamp).remove();
                                dlg.modal("hide");
                                scope.$apply();
                            }, (rej) => {
                                // Reset common
                                scope.common = nem.model.objects.get("common");
                                dlg.modal("hide");
                                Alert.errorDecodingMessage(rej);
                                scope.$apply();
                            });
                        } else {
                            scope.common = nem.model.objects.get("common");
                            Alert.errorDecodingMessage(rej);
                        }
                    }, (err) => {
                        // Reset common
                        scope.common = nem.model.objects.get("common");
                        Alert.getAccountDataError(err.statusText);
                    });
                }
            };

            /**
             * Do decoding and set result in the transaction template
             *
             * @param {string} publicKey - The public key of the signer or recipient
             * @param {object} tx - A transaction object
             */
            scope.processDecode = (publicKey, tx)  =>{
                // Check public key
                if(!publicKey) return Alert.noPublicKeyForDecoding();

                // Decode the message
                let decoded = nem.crypto.helpers.decode(scope.common.privateKey, publicKey, tx.message.payload);
                if (!decoded) return Alert.emptyDecodedMessage();
                            
                // Replace transaction message with decoded message
                tx.message.type = 1;
                tx.message.payload = decoded;
                // Reset common
                scope.common = nem.model.objects.get("common");
                // Remove the the decode part of the template
                $("#decodeTxMessage-" + tx.timeStamp).remove();
            }
        }

    };
}

export default DecodeMessage;