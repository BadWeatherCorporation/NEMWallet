import nem from 'nem-sdk';
import Helpers from '../../../utils/helpers';
import { QRServerTransport, QR } from "cool-utils";

class QrTransactionSignCtrl {

    /**
     * Initialize dependencies and properties
     *
     * @params {services} - Angular services to inject
     */
    constructor(Wallet, Alert, DataStore, $state, $timeout, $localStorage, $scope, $filter, AddressBook) {
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
            
            // register for cleanup on destroy
            const self = this;
            this._$scope.$on('$destroy', function () {
                if (self.server) {
                    console.log('Cleaning up after scanning');
                    self.server.cleanup();
                }
            });
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
     * Import transaction data/entity from QR code
     */
    scanQR() {
        // Disable send button
        this.okPressed = true;
        const self = this;
        // double check for viewonly even though view does not allow this to happen
        let primary = this.selectedWallet.accounts[0];
        if (primary.algo === 'viewonly') {
            this.okPressed = false;
            this._Alert.notSupportedForViewOnlyWallet();
            return;
        }
        if (! this.server) {
            this.server = new QRServerTransport($("#qrScanner"));
        }
        this.server.setWallet(this.selectedWallet, this.common.password);
        this.server.handleRequest().then(message => {
            self.isScanning = false;
            let code = QR.generateQR(message, $("#qrViewer"));
            code.title = this._$filter("translate")("QRTX_SIGN_SIGNATURE_FOR") + ' ' + JSON.stringify(message.payload);

            // inidcate that the signed QR code is available
            this.hasSignedQR = true;
    
            // re-enable the button for another scan
            this.okPressed = false;

            self._$scope.$apply();
        }, error => {
            // TODO: handle error
        });

        // indicate that we are scanning
        this.isScanning = true;
     }

     /**scan another QR code from view-only wallet */
     scanAnother() {
        this.hasSignedQR = false;
        this.scanQR();
     }

     /** stop scanning if in progress and let user select another wallet/account */
     changeAccount() {
        this.server.cleanup();
        this.hasSignedQR = false;
        this.isScanning = false;
        this.okPressed = false;
     }

    //// End methods region ////

}

export default QrTransactionSignCtrl;