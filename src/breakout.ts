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
	public drawBricks(bs: Bricks) {
		for(var r = 0; r < bs.getRowCount(); r++) {
			for(let c = 0; c < bs.getColumnCount(); c++) {
				let b = bs.getBrick(r, c);
				if (b.getIsBroken() == false)
				{
					b.setX((c * (b.getWidth() + bs.getPadding())) + bs.getOffsetLeft());
					b.setY((r * (b.getHeight() + bs.getPadding())) + bs.getOffsetTop());
					this.ctx.beginPath();
					this.ctx.rect(b.getX(), b.getY(), b.getWidth(), b.getHeight());
					this.ctx.fillStyle = "#0095DD";
					this.ctx.fill();
					this.ctx.closePath();
				}
			}
		}
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
		private x: number,
		private y: number,
		private isBroken: boolean,
		private readonly height: number,
		private readonly width: number,
	) {}
	public getX(): number {
		return this.x;
	}
	public getY(): number {
		return this.y;
	}
	public getIsBroken(): boolean {
		return this.isBroken;
	}
	public getHeight(): number {
		return this.height;
	}
	public getWidth(): number {
		return this.width;
	}
	public setX(x :number) {
		this.x = x;
	}
	public setY(y :number) {
		this.y = y;
	}
}

class Bricks{
	public brick: Brick[][]
	constructor(
		private readonly rowCount: number,
		private readonly columnCount: number,
		private readonly padding: number,
		private readonly offsetTop: number,
		private readonly offsetLeft: number,
	) {}
	public initData(b :Brick) {
		this.brick = new Array(this.rowCount)
		for (let r = 0; r < this.rowCount; r++) {
			this.brick[r] = new Array(this.columnCount)
			for (let c = 0; c < this.columnCount; c++) {
				this.brick[r][c] = b
			}
		}
	}
	public getRowCount(): number {
		return this.rowCount;
	}
	public getColumnCount(): number {
		return this.columnCount;
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
	public getBrick(row :number, column:number): Brick {
		return (this.brick[row][column]);
	}
}

let breakout = new Breakout(0, 3);
let ball = new Ball(10, 20, 10, 3, -3);
let paddle = new Paddle(10, 75, (breakout.getCanvasWidth() - 75) / 2, false, false);
let br = new Brick(0, 0, false, 20, 75)
let bricks = new Bricks(3, 5, 10, 30, 30)

bricks.initData(br)
breakout.drawLives();
breakout.drawScore();
breakout.drawPaddle(paddle);
breakout.drawBall(ball);
breakout.drawBricks(bricks);
