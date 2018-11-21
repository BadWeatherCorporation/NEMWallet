import nem from 'nem-sdk';
import Helpers from '../../utils/helpers';
import zxcvbn from 'zxcvbn';

class SignupCtrl {

    /**
     * Initialize dependencies and properties
     *
     * @params {services} - Angular services to inject
     */
    constructor(AppConstants, $state, Alert, WalletBuilder, $localStorage, $timeout, $scope, Wallet, AddressBook) {
        'ngInject';

        //// Module dependencies region ////

        this._storage = $localStorage;
        this._Alert = Alert;
        this._WalletBuilder = WalletBuilder;
        this._$state = $state;
        this._AppConstants = AppConstants;
        this._$timeout = $timeout;
        this._Wallet = Wallet;
        this._AddressBook = AddressBook;

        //// End dependencies region ////

        //// Module properties region ////

        // Default network
        this.network = this._AppConstants.defaultNetwork;

        // Available networks
        this.networks = nem.model.network.data;

        // Get wallets from local storage or set an empty array
        this._storage.wallets = this._storage.wallets || [];

        // Lock to prevent user to click twice on button when already processing
        this.okPressed = false;

        // Raw wallet data to show in view
        this.rawWallet = "";

        // Wallet private key to show in view
        this.walletPrivateKey = "";

        // Store created wallet temporarily
        this.tempWallet = {};

        // Form data object
        this.formData = {};
        this.formData.password = "";
        this.formData.confirmPassword = "";
        this.formData.walletName = "";
        this.formData.privateKey = "";
        this.formData.entropy = "";
        this.formData.viewOnlyAddress = "";
        // Address generated by provided private key (private key wallet)
        this.generatedAddress = "";

        // Wallet types
        this.walletTypes = [{
            "type": 1 // Simple
            }, {
                "type": 2 // Brain
            }, {
                "type": 3 // Private key
            }, {
                "type": 4 // View only
            }
        ];

        // Selected wallet type
        this._selectedType = undefined;

        // Password strength info given by zxcvbn
        this.passwordStrengthInfo = {};

        //// End properties region ////
        
        // Will stop catching entropy if user change page in the middle of movement capture
        $scope.$on("$destroy", () => {
            $("html").off('mousemove');
        });
    }

    //// Module methods region ////

    /**
     * Change the selected wallet type
     *
     * @param {number} type - Type number
     */
    changeWalletType(type) {
        this._selectedType = this.walletTypes[type - 1];
    }

    /**
     * Change wallet network
     *
     * @param {number} id - The network id to use at wallet creation
     */
    changeNetwork(id) {
        if (id == nem.model.network.data.mijin.id && this._AppConstants.mijinDisabled) {
            this._Alert.mijinDisabled();
            // Reset network to default
            this.network = this._AppConstants.defaultNetwork;
            return;
        } else if (id == nem.model.network.data.mainnet.id && this._AppConstants.mainnetDisabled) {
            this._Alert.mainnetDisabled();
            // Reset network to default
            this.network = this._AppConstants.defaultNetwork;
            return;
        }
        // Set Network
        this.network = id;
    }

    /**
     * Arrange wallet data to show in safety protocol
     *
     * @param {object} wallet - A wallet object
     */
    arrangeSafetyProtocol(wallet) {
        // Store wallet temporarily until safety protocol done
        this.tempWallet = wallet;
        // Prepare download
        this._Wallet.prepareDownload(wallet);
        // Store base64 format for safety protocol
        this.rawWallet = this._Wallet.base64Encode(wallet);
        // Unlock button
        this.okPressed = false;
        return;
    }

    /**
     * Create a new PRNG wallet
     */
    createWallet() {
        // Check if passwords match
        if (!this.checkPasswordsMatch()) return;

        // Lock button
        this.okPressed = true;

        // Create the wallet from form data
        return this._WalletBuilder.createWallet(this.formData.walletName, this.formData.password, this.formData.entropy, this.network).then((wallet) => {
            this._$timeout(() => {
                if (wallet && typeof wallet === 'object') {
                    //
                    this.arrangeSafetyProtocol(wallet);
                    // We need private key for view so we create a common object with the wallet password
                    let common = nem.model.objects.create("common")(this.formData.password, "");
                    // Decrypt / generate and check primary
                    if (!this._Wallet.decrypt(common, wallet.accounts[0], wallet.accounts[0].algo, wallet.accounts[0].network)) {
                        // Enable send button
                        this.okPressed = false;
                        return;
                    } else {
                        // Set the decrypted private key for view
                        this.walletPrivateKey = common.privateKey;
                    }
                    // Hide step
                    this.step4 = false;
                    // Show next step
                    this.step5 = true;
                    return;
                }
            }, 10);
        },
        (err) => {
            // Unlock button
            this.okPressed = false;
            return;
        });
    }

    /**
     * Create a new brain wallet
     */
    /*createBrainWallet() {
        // Check if passwords match
        if (!this.checkPasswordsMatch()) return;

        // Mainnet passphrase must be at least 40 characters long
        if (this.network === nem.model.network.data.mainnet.id && this.formData.password.length < 40) {
            this._Alert.brainPasswordTooShort();
            return;
        }

        // Mainnet passphrase must have a score of at least 3/4
        if (this.network === nem.model.network.data.mainnet.id && zxcvbn(this.formData.password).score < 3) {
            this._Alert.passphraseIsWeak();
            return;
        }

        // Lock button
        this.okPressed = true;

        // Create the wallet from form data
        return this._WalletBuilder.createBrainWallet(this.formData.walletName, this.formData.password, this.network).then((wallet) => {
            this._$timeout(() => {
                if (wallet && typeof wallet === 'object') {
                    //
                    this.arrangeSafetyProtocol(wallet);
                    // Store private key for account safety protocol
                    this.walletPrivateKey = nem.crypto.helpers.derivePassSha(this.formData.password, 6000).priv;
                    // Hide step
                    this.step3 = false;
                    // Show next step
                    this.step5 = true;
                    return;
                }
            }, 10);
        },
        (err) => {
            // Unlock button
            this.okPressed = false;
            return;
        });
    }*/

    /**
     * Create a new private key wallet
     */
    createPrivateKeyWallet() {
        // Check if passwords match
        if (!this.checkPasswordsMatch()) return;

        // Lock button
        this.okPressed = true;

        // Create the wallet from form data
        return this._WalletBuilder.createPrivateKeyWallet(this.formData.walletName, this.formData.password, this.formData.privateKey, this.network).then((wallet) => {
            this._$timeout(() => {
                if (wallet && typeof wallet === 'object') {
                    //
                    this.arrangeSafetyProtocol(wallet);
                    this.walletPrivateKey = this.formData.privateKey;
                    // Hide step
                    this.step4 = false;
                    // Show next step
                    this.step5 = true;
                    return;
                }
            }, 10);
        },
        (err) => {
            // Unlock button
            this.okPressed = false;
            return;
        });
    }

    createViewOnlyWallet() {
        // Lock button
        this.okPressed = true;

        // Create the wallet from form data
        return this._WalletBuilder.createViewOnlyWallet(this.formData.walletName, this.formData.viewOnlyAddress, this.network).then((wallet) => {
            this._$timeout(() => {
                if (wallet && typeof wallet === 'object') {
                    //
                    this.arrangeSafetyProtocol(wallet);
                    // Hide step
                    this.step4 = false;
                    // Show final step
                    this.step8 = true;
                    return;
                }
            }, 10);
        },
        (err) => {
            // Unlock button
            this.okPressed = false;
            return;
        });
    }

    /**
     * Generate the address from private key to import
     */
    generateAddress() {
        if(undefined !== this.formData.privateKey && this.formData.privateKey.length) {
            // Check private key
            if (nem.utils.helpers.isPrivateKeyValid(this.formData.privateKey)) {
                // Create key pair
                let kp = nem.crypto.keyPair.create(this.formData.privateKey);
                // Create address to show
                this.generatedAddress = nem.model.address.toAddress(kp.publicKey.toString(), this.network);
            } else {
                // Reset address
                this.generatedAddress = "";
                // Show error alert
                this._Alert.invalidPrivateKey();
            }
        }
    }

    /**
     * Check if a wallet name is already present in local storage
     */
    checkWalletNamePresence() {
        if (Helpers.haveWallet(this.formData.walletName, this._storage.wallets)) return true;
        return false;
    }

    /**
     * Check if password and confirmation are the same
     */
    checkPasswordsMatch() {
        if (this.formData.password !== this.formData.confirmPassword) {
            this._Alert.passwordsNotMatching();
            return false;
        }
        return true;
    }

    /**
     * Hide signup steps / reset to wallet type selection
     */
    hideAllSteps() {
        this.start = false;
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.progressBar = false;
        this.entropyDone = false;
        document.getElementById("pBar").style.width = '0%';
        this.formData.entropy = "";
    }

    /**
     * Watch cursor movements to add more entropy to key generation (simple wallet)
     */
    getEntropy() {
        // Prepare
        let elem = document.getElementById("pBar");
        let width = 0;
        let entropy = "";
        // Watch for cursor movements
        $("html").mousemove((e) => {
            //console.log("pos x: " + e.pageX);
            //console.log("pos y: " + e.pageY);
            if (width >= 100) {
                this._$timeout(() => {
                    // Stop catching cursor movements
                    $("html").off('mousemove');
                    elem.innerHTML = '<span class="fa fa-check-circle" aria-hidden="true"></span> Done!';
                    this.entropyDone = true;
                    this.formData.entropy = entropy;
                });
            } else {
                entropy += e.pageX + "" + e.pageY;
                width += 0.15; 
                elem.style.width = width + '%'; 
                elem.innerHTML = Math.round(width * 1)  + '%';
            }
        });
    }

    /**
     * Finalize signup process
     */
    endSignup() {
        // Store wallet temporarily until safety protocol done
        let wallet = this.tempWallet;
        // Add the account into address book
        this._AddressBook.addAccount(wallet.accounts[0].address);
        // Set wallet in local storage
        this._storage.wallets = this._storage.wallets.concat(wallet);
        // Show success alert
        this._Alert.createWalletSuccess();
        // Reset form data
        this.formData = {};
        this.step8 = false;
        this.step9 = true;
    }

    /**
     * Update the passphrase strength information
     */
    updatePasswordStrengthInfo() {
        this.passwordStrengthInfo = zxcvbn(this.formData.password);
    }

    //// End methods region ////

}

export default SignupCtrl;