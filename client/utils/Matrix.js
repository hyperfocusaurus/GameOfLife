// combine positions using | to get the diagonals
const POSITIONS = {
    'DOWN': 2,
    'LEFT': 4,
    'RIGHT': 6,
    'UP': 8
};
var MatrixNode = function (payload) {
    var neighbours = [];

    this.addNeighbour = function (position, node) {
        neighbours[position] = node;
    };

    this.getNeighbour = function (position) {
        return neighbours[position];
    };

    this.getPayload = function () {
        return payload;
    }
};

var Matrix = function () {
    var topLeft,
        topRight,
        bottomLeft;

    function createColumn(creator) {
        var newTopNode = new MatrixNode(creator());
        if(!topRight) {
            topRight = new MatrixNode(creator());
        }
        topRight.addNeighbour(POSITIONS.RIGHT, newTopNode);
        newTopNode.addNeighbour(POSITIONS.LEFT, topRight);
        function recursivelyAddNodes(previousNode, previousNodeLeft) {
            var newNode = new MatrixNode(creator()), nextNodeLeft;
            previousNode.addNeighbour(POSITIONS.DOWN, newNode);
            newNode.addNeighbour(POSITIONS.UP, previousNode);
            previousNodeLeft.addNeighbour(POSITIONS.DOWN | POSITIONS.RIGHT, newNode);
            newNode.addNeighbour(POSITIONS.UP | POSITIONS.LEFT, previousNodeLeft);
            if(nextNodeLeft = previousNodeLeft.getNeighbour(POSITIONS.DOWN)) {
                recursivelyAddNodes(newNode, nextNodeLeft);
            }
        }
        recursivelyAddNodes(newTopNode, topRight);
        topRight = newTopNode; // update the matrix' coordinate space
    }

    this.augmentRight = function (num, creator) {
        function addColumn(leftToAdd) {
            createColumn(creator);
            if(leftToAdd > 0) {
                addColumn(leftToAdd-1)
            }
        }
    };

    this.augmentBottom = function (num, creator) {

    };
};

module.exports = Matrix;