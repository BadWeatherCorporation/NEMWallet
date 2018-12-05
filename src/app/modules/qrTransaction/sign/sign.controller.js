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
            // register for cleanup on destroy
            this.cleanUp(this._$scope, this._QR);
            // pick the primary wallet as the selected one
            this.selectedWallet = this._storage.wallets[0];
            this.setAccount();
            this.setContacts();
            // Prevent user to click twice on send when already processing
            this.okPressed = false;
            // indicate whether to display the scanner
            this.isScanning = false;
            // indicate whether to display the signed QR code
            this.hasSignedQR = false;
            // Object to contain our password & private key data
            this.common = nem.model.objects.get("common");
            // signed transaction
            this.resultSafeTransaction = "";
        }
    }

    /** register scope listener to perform cleanup when controller is done */
    cleanUp(scope, qrService) {
        scope.$on('$destroy', function () {
            console.log('Cleaning up after scanning');
            qrService.stopScanQR();
        });
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
    sign(entity) {
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

        let code = this._QR.generateQR(this.resultSafeTransaction, $("#qrViewer"));
        code.title = this._$filter("translate")("QRTX_SIGN_SIGNATURE_FOR") + ' ' + JSON.stringify(entity);
        // inidcate that the signed QR code is available
        this.hasSignedQR = true;

        // re-enable the button for another scan
        this.okPressed = false;
    }

    /**
     * Import transaction data/entity from QR code
     */
    scanQR() {
        // Disable send button
        this.okPressed = true;
        // double check for viewonly even though view does not allow this to happen
        let primary = this.selectedWallet.accounts[0];
        if (primary.algo === 'viewonly') {
            this.okPressed = false;
            this._Alert.notSupportedForViewOnlyWallet();
            return;
        }
        // display scanner for the QR from viewonly wallet
        let self = this;
        let scanner = $("#qrScanner");
        self._QR.scanQR((value) => {
            // check that the scanned QR is as expected
            let json = JSON.parse(value);
            return json && json["type"] && json["version"] && !json["signer"] && json["timeStamp"] && json["deadline"];
        }, (value) => {
            console.log("got callback with "+value);
            // hide the scanner
            self.isScanning = false;
            // process the scanned value
            if (value) {
                console.log("signing");
                self.sign(JSON.parse(value));
            }
            self._$scope.$apply();
        }, scanner);
        // indicate that we are scanning
        self.isScanning = true;
     }

     /**scan another QR code from view-only wallet */
     scanAnother() {
        this.hasSignedQR = false;
        this.scanQR();
     }

     /** stop scanning if in progress and let user select another wallet/account */
     changeAccount() {
        this._QR.stopScanQR();
        this.hasSignedQR = false;
        this.isScanning = false;
        this.okPressed = false;
     }

    //// End methods region ////

}

export default QrTransactionSignCtrl;