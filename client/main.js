var GameOfLife = require('./core/GameOfLife'),
    $ = require('jquery');

$(function () {
    var gol = new GameOfLife({
        canvas: $('#gol-canvas'),
        universe: {
            progressCallback: function (progress) {
                console.log('universe generation progress: ', progress);
            }
        }
    });
    window.addEventListener('resize', gol.resize);
    gol.resize();
    gol.run();
});
