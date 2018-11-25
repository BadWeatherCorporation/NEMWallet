import angular from 'angular';

// Create the module where our functionality can attach to
let qrTransactionSignModule = angular.module('app.qrTransactionSign', []);
// Include our UI-Router config settings
import QrTransactionSignConfig from './sign/sign.config';
qrTransactionSignModule.config(QrTransactionSignConfig);
// Controllers
import QrTransactionSignCtrl from './sign/sign.controller';
qrTransactionSignModule.controller('QrTransactionSignCtrl', QrTransactionSignCtrl);

export default qrTransactionSignModule;
