// import { Ball } from "./object";

import { collapseTextChangeRangesAcrossMultipleVersions } from "../node_modules/typescript/lib/typescript";

class Breakout {
	private readonly canvas: HTMLCanvasElement
	private readonly ctx: CanvasRenderingContext2D
	static readonly font: string = "16px Arial"
	static readonly style: string = "#0095DD"
	constructor(
		private readonly score: number,
		private readonly lives: number,
	) 
	{
		let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
		let ctx = canvas.getContext("2d");
		this.canvas = canvas;
		this.ctx = ctx;
	}
	public getCanvasWidth(): number {
		return this.canvas.width;
	}
	public getCanvasHeight(): number {
		return this.canvas.height;
	}
	public drawScore() {
		this.ctx.font = Breakout.font;
		this.ctx.fillStyle = Breakout.style;
		this.ctx.fillText("Score: "+ this.score, 8, 20);
	}
	public drawLives() {
		this.ctx.font = Breakout.font;
		this.ctx.fillStyle = Breakout.style;
		this.ctx.fillText("Lives: "+ this.lives, this.getCanvasWidth() - 65, 20);
	}
	public drawPaddle(p: Paddle) {
		this.ctx.beginPath();
		this.ctx.rect(
			p.getX(), 
			this.getCanvasHeight() - p.getHeight(), 
			p.getWidth(), p.getHeight()
		);
		this.ctx.fillStyle = Breakout.style;
		this.ctx.fill();
		this.ctx.closePath();
	}
	public drawBall(b: Ball) {
		this.ctx.beginPath();
		this.ctx.arc(
			b.getX(),
			b.getY(),
			b.getRadius(),
			0,
			Math.PI * 2
		);
		this.ctx.fillStyle = Breakout.style;
		this.ctx.fill();
		this.ctx.closePath();
	}
	
}

class Ball {
	constructor(
		private readonly x: number, 
		private readonly y: number,
		private readonly radius: number,
		public dx: number, 
		public dy: number
	){}
	public getX(): number {
		return this.x;
	}
	public getY(): number {
		return this.y;
	}
	public getRadius(): number {
		return this.radius;
	}
}

class Paddle {
	constructor(
		private readonly height: number,
		private readonly width: number,
		private readonly x: number,
		public rightPressed: boolean,
		public leftPressed: boolean
	) {}
	public getHeight(): number {
		return this.height;
	}
	public getWidth(): number {
		return this.width;
	}
	public getX(): number {
		return this.x;
	}
}

class Brick {
	constructor(
		private readonly rowCount: number,
		private readonly columnCount: number,
		private readonly width: number,
		private readonly height: number,
		private readonly padding: number,
		private readonly offsetTop: number,
		private readonly offsetLeft: number,
	) {}
	
	public getRowCount(): number {
		return this.rowCount;
	}
	public getColumnCount(): number {
		return this.columnCount;
	}
	public getWidth(): number {
		return this.width;
	}
	public getHeight(): number {
		return this.height;
	}
	public getPadding(): number {
		return this.padding;
	}
	public getOffsetTop(): number {
		return this.offsetTop;
	}
	public getOffsetLeft(): number {
		return this.offsetLeft;
	}
}

let breakout = new Breakout(0, 3);
let ball = new Ball(10, 20, 10, 3, -3);
let paddle = new Paddle(10, 75, (breakout.getCanvasWidth() - 75) / 2, false, false);
let brick = new Brick(3, 5, 75, 20, 10, 30, 30);
breakout.drawLives();
breakout.drawScore();
breakout.drawPaddle(paddle);
breakout.drawBall(ball);

