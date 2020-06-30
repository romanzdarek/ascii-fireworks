import BaseSpark from './BaseSpark';

export default class ExplosionSpark extends BaseSpark {
	private shiftX: number;
	private shiftY: number;

	constructor(x: number, y: number) {
		super(x, y);
		this.maxAge = 60 + Math.floor(Math.random() * 21);
		//set random direction
		const randomXDirection = Math.random() < 0.5 ? 1 : -1;
		this.shiftX = Math.random() / 2 * randomXDirection;
		const randomYDirection = Math.random() < 0.5 ? 1 : -1;
		this.shiftY = Math.random() / 2 * randomYDirection;
	}

	move(): void {
		this.x += this.shiftX;
		this.y += this.shiftY;
		this.age++;
	}
}
