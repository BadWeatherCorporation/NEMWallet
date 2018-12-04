import jsQR from "jsqr";

class QR {

    /**
     * Initialize dependencies and properties
     *
     * @params {services} - Angular services to inject
     */
    constructor() {
        'ngInject';

        //// Component dependencies region ////

        //// End dependencies region ////

        //// Component properties region ////

        /**
         * Indicate if scan in progress
         *
         * @type {boolean}
         */
        this.scanStarted = false;
        this.scanDestination = undefined;
        this.generateDestination = undefined;

        //// End properties region ////
    }

    reset() {
        this.scanStarted = false;
        if (this.scanDestination) {
            this.scanDestination.html("");
            this.scanDestination = undefined;
        }
        if (this.generateDestination) {
            this.generateDestination.html("");
            this.generateDestination = undefined;
        }
    }

    //// Component methods region ////
    /**
    * Generate QR image data
    */
    generateQR(data, destination) {
        let code = kjua({
            size: 1024,
            text: data,
            fill: '#000',
            quiet: 0,
        });
        code.style.width = "90%";
        code.style.height = "90%";
        this.generateDestination = destination;
        if (this.generateDestination) {
            this.generateDestination.html(code);
        }
        //also, return generated img src
        return code.src;
    }

    /**
     * scan qrcode image
     */
    scanQR(acceptFn, callbackFn, destination, continueScanning) {
        this.scanStarted = true;
        let self = this;
        this.scanDestination = destination;
        let cvsElement = document.createElement('canvas');
        cvsElement.id = "scanQrcodeCvs";
        cvsElement.hidden = true;

        let videoElement = document.createElement('video');
        videoElement.style.width = "90%";
        videoElement.style.margin = "10px";

        this.scanDestination.append(cvsElement);
        this.scanDestination.append(videoElement);

        this.video = document.getElementsByTagName('video')[0];
        this.canvasElement = document.getElementById("scanQrcodeCvs");
        this.canvas = this.canvasElement.getContext("2d");

        navigator.mediaDevices.getUserMedia({ video: { width: 9999, height: 9999, facingMode: "environment" } }).then(function(stream) {
            self.video.srcObject = stream;
            self.openedVideoStream = stream;
            self.video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
            self.video.play();
            self._continueDetectQR(acceptFn, callbackFn, continueScanning);
        }).catch(function(err){
            console.error("Couldn't get camera.");
            self.stopScanQR();
            callbackFn(undefined);
        });
    }

    /**
     * search qrcode in video realtime.
     */
    _continueDetectQR (acceptFn, callbackFn, continueScanning) {
        let self = this;
        self.continueDetectInterval = setInterval(() => {
            self._tick(acceptFn, callbackFn, continueScanning);
        }, 1000);
    }

    /**
    * read qrcode
    */
    _tick(acceptFn, callbackFn, continueScanning) {
        let self = this;
        if (self.video.readyState === self.video.HAVE_ENOUGH_DATA) {
            self.canvasElement.height = self.video.videoHeight;
            self.canvasElement.width = self.video.videoWidth;

            self.canvas.drawImage(self.video, 0, 0, self.canvasElement.width, self.canvasElement.height);
            var imageData = self.canvas.getImageData(0, 0, self.canvasElement.width, self.canvasElement.height);
            var code = jsQR(imageData.data, imageData.width, imageData.height);

            if (code && acceptFn(code.data)) {
                try {
                    console.log('success detect QR, close camera: ' + code.data);
                    //let data = JSON.parse(code.data)
                    if (!continueScanning) {
                        this.stopScanQR();
                    }
                    callbackFn(code.data);
                } catch (err) {
                    console.log('continue to detect Qrcode...');
                    console.log(err.stack);
                }
            } else if (code) {
                console.log("QR not accepted: " + code.data);
            }
        }
    }

    stopScanQR() {
        if (this.scanStarted) {
            this.scanStarted = false;
            clearInterval(this.continueDetectInterval); //clear interval
            if (this.openedVideoStream) {
                this.openedVideoStream.getTracks()[0].stop(); //stop stream
            }
            this.video.pause(); // video pause;
            this.reset(); //delete #camera content
        }
    }

    //// End methods region ////
}

export default QR;