import BaseSpark from './BaseSpark';

export default class FountainSpark extends BaseSpark {
	private horizontalShift: number;
	private gravity: number;
	private verticalSpeed: number;

	constructor(x: number, y: number) {
        super(x, y);
        this.maxAge = 200 + Math.floor(Math.random() * 51);
		const verticalDirection = Math.random() < 0.5 ? -1 : 1;
		this.horizontalShift = Math.random() / 8 * verticalDirection;
		this.verticalSpeed = (0.8 + Math.random() / 3) * -1;
		this.gravity = 0;
	}

	move(): void {
		this.gravity += 0.007;
		this.x += this.horizontalShift;
		this.y += this.verticalSpeed + this.gravity;
		this.age++;
	}
}
