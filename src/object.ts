export class Paddle {
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