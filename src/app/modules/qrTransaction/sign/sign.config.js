function QrTransactionSignConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.qrTransactionSign', {
            url: '/sign-qr-transaction',
            controller: 'QrTransactionSignCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'modules/qrTransaction/sign/sign.html',
            title: 'QR transaction - Send'
        });

};

export default QrTransactionSignConfig;