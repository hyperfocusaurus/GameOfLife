var Pixel = function (position) {
    var age = 0, position;

    this.position = function () {
        return position;
    };

    this.getColor = function getColor() {
        var color;
        switch(age) {
            case 0:
                color = 'rgb(0,0,0)';
                break;
            case 1:
                color = 'rgb(0,0,255)';
                break;
        }
        return color;
    }
};

module.exports = Pixel;