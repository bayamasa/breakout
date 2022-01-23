// import { Ball } from "./object";
var Breakout = /** @class */ (function () {
    function Breakout(score, lives) {
        this.score = score;
        this.lives = lives;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.ctx = ctx;
    }
    Breakout.prototype.getCanvasWidth = function () {
        return this.canvas.width;
    };
    Breakout.prototype.getCanvasHeight = function () {
        return this.canvas.height;
    };
    Breakout.prototype.drawScore = function () {
        this.ctx.font = Breakout.font;
        this.ctx.fillStyle = Breakout.style;
        this.ctx.fillText("Score: " + this.score, 8, 20);
    };
    Breakout.prototype.drawLives = function () {
        this.ctx.font = Breakout.font;
        this.ctx.fillStyle = Breakout.style;
        this.ctx.fillText("Lives: " + this.lives, this.getCanvasWidth() - 65, 20);
    };
    Breakout.prototype.drawPaddle = function (p) {
        this.ctx.beginPath();
        this.ctx.rect(p.getX(), this.getCanvasHeight() - p.getHeight(), p.getWidth(), p.getHeight());
        this.ctx.fillStyle = Breakout.style;
        this.ctx.fill();
        this.ctx.closePath();
    };
    Breakout.prototype.drawBall = function (b) {
        this.ctx.beginPath();
        this.ctx.arc(b.getX(), b.getY(), b.getRadius(), 0, Math.PI * 2);
        this.ctx.fillStyle = Breakout.style;
        this.ctx.fill();
        this.ctx.closePath();
    };
    Breakout.font = "16px Arial";
    Breakout.style = "#0095DD";
    return Breakout;
}());
var Ball = /** @class */ (function () {
    function Ball(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }
    Ball.prototype.getX = function () {
        return this.x;
    };
    Ball.prototype.getY = function () {
        return this.y;
    };
    Ball.prototype.getRadius = function () {
        return this.radius;
    };
    return Ball;
}());
var Paddle = /** @class */ (function () {
    function Paddle(height, width, x, rightPressed, leftPressed) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.rightPressed = rightPressed;
        this.leftPressed = leftPressed;
    }
    Paddle.prototype.getHeight = function () {
        return this.height;
    };
    Paddle.prototype.getWidth = function () {
        return this.width;
    };
    Paddle.prototype.getX = function () {
        return this.x;
    };
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
var breakout = new Breakout(0, 3);
var ball = new Ball(10, 20, 10, 3, -3);
var paddle = new Paddle(10, 75, (breakout.getCanvasWidth() - 75) / 2, false, false);
var brick = new Brick(3, 5, 75, 20, 10, 30, 30);
breakout.drawLives();
breakout.drawScore();
breakout.drawPaddle(paddle);
breakout.drawBall(ball);
