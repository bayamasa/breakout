// import { Ball } from "./object";
var Breakout = /** @class */ (function () {
    function Breakout(canvas, ctx, score, lives) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.score = score;
        this.lives = lives;
    }
    return Breakout;
}());
var Ball = /** @class */ (function () {
    function Ball(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }
    return Ball;
}());
export { Ball };
var Paddle = /** @class */ (function () {
    function Paddle(height, width, x, rightPressed, leftPressed) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.rightPressed = rightPressed;
        this.leftPressed = leftPressed;
    }
    return Paddle;
}());
var Brick = /** @class */ (function () {
    function Brick(rowCount, columnCount, width, height, padding, offsetTop, offsetLeft) {
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.width = width;
        this.height = height;
        this.padding = padding;
        this.offsetTop = offsetTop;
        this.offsetLeft = offsetLeft;
    }
    return Brick;
}());
var ball = new Ball(10, 20, 3, -3);
console.log(ball.dx);
