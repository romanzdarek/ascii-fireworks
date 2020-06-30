export default abstract class BaseSpark {
	protected x: number;
	protected y: number;
	protected age: number = 0;
	protected maxAge: number = 0;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	abstract move(): void;

	getX(): number {
		return Math.round(this.x);
	}

	getY(): number {
		return Math.round(this.y);
	}

	isOld(): boolean {
		return this.age > this.maxAge;
	}
}
