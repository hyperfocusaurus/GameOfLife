const SUPPORTED_RESOLUTIONS = [
    {
        "x":1920, "y": 1080
    }, {
        "x":1600, "y": 900
    }, {
        "x":1366, "y": 768
    }, {
        "x":1280, "y": 720
    }, {
        "x":1024, "y": 576
    }, {
        "x":960, "y": 540
    }, {
        "x":864, "y": 486
    }, {
        "x":640, "y": 360
    }, {
        "x":512, "y": 288
    }
];

var _ = require('lodash');
module.exports = function (clientWidth) {
    var res = {x:0,y:0};
    res = _.find(SUPPORTED_RESOLUTIONS, function (resolution) {
        if(resolution.x < clientWidth) {
            return true;
        }
    });
    return res || {x:160, y:90};
};