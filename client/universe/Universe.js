var _ = require('lodash'),
    Pixel = require('../pixels/Pixel'),
    Matrix = require('../utils/Matrix'),
    Universe = function (options) {
    var pixelMatrix = new Matrix();

    function reportProgress (progress) {
        if(typeof options.progressCallback === 'function') {
            options.progressCallback(progress);
        }
    }

    function generatePixels(num, dimension) {
        if(dimension === 'width') {
            pixelMatrix.addColumns(num, function () {
                return new Pixel();
            });
        }
    }

    function removePixels(num, dimension) {

    }

    this.resize = function resize(newSize) {
        var widthDeficit = (newSize.x - pixelMatrix.width),
            heightDeficit = (newSize.y - pixelMatrix.height);
        function resizeDimension(dimensionDeficit, dimension) {
            if(dimensionDeficit > 0) {
                generatePixels(dimensionDeficit, dimension);
            } else if (dimensionDeficit < 0) {
                removePixels(dimensionDeficit);
            }
        }
        resizeDimension(widthDeficit, 'width');
        resizeDimension(heightDeficit, 'height');
    };

    this.update = function update() {
        _.each(pixels, function (pixel) {
            pixel.update();
        });
    };

    this.getPixels = function getPixels() {
        return pixels;
    }
};

module.exports = Universe;