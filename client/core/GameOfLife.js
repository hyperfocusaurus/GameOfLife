var pickResolution = require('../utils/resolution-helper'),
    Universe = require('../universe/Universe'),
    $ = require('jquery'),
    _ = require('lodash'),
    GameOfLife = function (options) {
    options = options || {};
    var universeOptions = options.universe || {},
        $canvas = options.canvas || createCanvasElement(),
        offscreenCanvas = createCanvasElement(),
        universe = new Universe(universeOptions);

    function createCanvasElement() {
        var canvas = document.createElement('canvas');
        return $(canvas);
    }

    function logicLoop(timestamp) {
        universe.update();
        requestAnimationFrame(logicLoop);
    }

    function renderLoop(timestamp) {
        var pixels = universe.getPixels(),
            ctx = $canvas[0].getContext('2d');
        _.each(pixels, function (pixel) {
            ctx.save();
            ctx.fillStyle = pixel.getColor();
            ctx.fillRect(pixel.x, pixel.y, 1, 1);
            ctx.restore();
        });
        requestAnimationFrame(renderLoop);
    }

    this.run = function run() {
        requestAnimationFrame(logicLoop);
        requestAnimationFrame(renderLoop);
    };

    this.resize = function resize() {
        var res = pickResolution($(window).width());
        $canvas.width(res.x);
        $canvas.height(res.y);
        console.log(res, $canvas.height(), $canvas.width(), $canvas.length);
        universe.resize(res);
    };
};

module.exports = GameOfLife;