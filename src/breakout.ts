// import { Ball } from "./object";

class Breakout {
	constructor(
		private readonly canvas: HTMLCanvasElement,
		private readonly ctx: CanvasRenderingContext2D, 
		private readonly score: number,
		private readonly lives: number
	) {}
}

export class Ball {
	constructor(
		private readonly x: number, 
		private readonly y: number,
		public dx: number, 
		private dy :number
	){}
}

class Paddle {
	constructor(
		private readonly height: number,
		private readonly width: number,
		private readonly x: number,
		public rightPressed: boolean,
		public leftPressed: boolean
	) {}
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
}

let ball = new Ball(10, 20, 3, -3);
console.log(ball.dx);