import nem from 'nem-sdk';
import Helpers from '../../../utils/helpers';

class QrTransactionSignCtrl {

    /**
     * Initialize dependencies and properties
     *
     * @params {services} - Angular services to inject
     */
    constructor(Wallet, Alert, DataStore, $state, $timeout, $localStorage, $scope, $filter, AddressBook, QR) {
        'ngInject';

        //// Module dependencies region ////

        this._Alert = Alert;
        this._Wallet = Wallet;
        this._DataStore = DataStore;
        this._$state = $state;
        this._$timeout = $timeout;
        this._Helpers = Helpers;
        this._storage = $localStorage;
        this._AddressBook = AddressBook;
        this._QR = QR;
        this._$scope = $scope;
        this._$filter = $filter;
        //// End dependencies region ////

        // Initialization
        this.init();
    }

    //// Module methods region ////

    /**
     * Initialize module properties
     */
    init() {
        // Show warning if connection detected
        if (navigator.onLine) $('#connectionWarning').modal('show');
        // Get wallets from local storage or set an empty array
        this._storage.wallets = this._storage.wallets || [];
        if (this._storage.wallets.length) {
            //
            this.selectedWallet = this._storage.wallets[0];
            this.setAccount();
            this.setContacts();
            // Prevent user to click twice on send when already processing
            this.okPressed = false;
            // Object to contain our password & private key data
            this.common = nem.model.objects.get("common");
            // signed transaction
            this.resultSafeTransaction = "";
        }
    }

    /**
     * Show / Hide address book <select>
     */
    showHideAddressBook() {
        this.showContacts = this.showContacts ? this.showContacts = false : this.showContacts = true;
    }

    setContacts() {
        this.contacts = this._AddressBook.getContacts(this.selectedWallet);
    }

    setAccount() {
        this.selectedAccount = this.selectedWallet.accounts[0];
    }

    /**
     * Create the signed transaction
     */
    create(entity) {
        // Disable send button
        this.okPressed = true;

        // Get account private key for preparation or return
        let primary = this.selectedWallet.accounts[0];
        if (!this._Wallet.decrypt(this.common, this.selectedAccount, primary.algo, primary.network)) return this.okPressed = false;

        // Create a key pair object from private key
        let kp = nem.crypto.keyPair.create(nem.utils.helpers.fixPrivateKey(this.common.privateKey));

        // Fix signer if empty => this publicKey
        if (!entity.signer) {
            entity.signer = kp.publicKey.toString();
        }
        // Encrypt message if not encrypted yet
        if (entity.message && entity.message.type===2 && entity.message.publicKey) {
            // TODO: message.payload contains hex of the message, need to either dehex it first ... or?
            entity.message.payload = nem.crypto.helpers.encode(nem.utils.helpers.fixPrivateKey(this.common.privateKey), entity.message.publicKey, entity.message.payload);
        }

        // Serialize the transaction
        let serialized = nem.utils.serialization.serializeTransaction(entity);

        // Sign the serialized transaction with keypair object
        let signature = kp.sign(serialized);

        // Build the object to send
        this.resultSafeTransaction = JSON.stringify({
            'data': nem.utils.convert.ua2hex(serialized),
            'signature': signature.toString()
        });

        this._QR.generateQR(this.resultSafeTransaction, $("#qrSignStep2"));

        this.okPressed = false;
    }

    /**
     * Import transaction data/entity from QR code
     */
    scanAndSign() {
        let primary = this.selectedWallet.accounts[0];
        if (primary.algo === 'viewonly') {
            this.okPressed = false;
            this._Alert.notSupportedForViewOnlyWallet();
            return;
        }

        let dlg = $("#generateQrModalDlg");
        let self = this;
        let entity = undefined;
        // set the titles
        $("#qrSignTitle1").text(self._$filter('translate')('QRSIGN_SIGN_TITLE1'));
        $("#qrSignTitle2").text(self._$filter('translate')('QRSIGN_SIGN_TITLE2'));
        self._QR.scanQR((value) => {
            let json = JSON.parse(value);
            //signer has to be empty!
            return json && json["type"] && json["version"] && !json["signer"] && json["timeStamp"] && json["deadline"];
        }, (value) => {
            if (value) {
                entity = JSON.parse(value);
            }
            //dlg.modal("hide");
            self.create(entity);
            self._$scope.$apply();
        }, $("#qrSignStep1"), true);
        if (dlg) {
            dlg.modal("show").on("hide.bs.modal", function() {
                $(this).off('hide.bs.modal');
                // stop the scanning when dlg is closed
                self._QR.stopScanQR();
            });
        }
     }

    //// End methods region ////

}

export default QrTransactionSignCtrl;