import FountainSpark from './FountainSpark';
import BaseFirework from './BaseFirework';

export default class Fountain extends BaseFirework {
	private x: number;
	private y: number;

	constructor(x: number, y: number) {
		super();
		this.x = x;
		this.y = y;
		this.interval = 1500;
	}

	private createNewSparks(): void {
		if (Date.now() > this.startTime && Math.random() < 0.2) {
			this.sparks.push(new FountainSpark(this.x, this.y));
			if (!this.startTime) this.startTime = Date.now();
			else if (Date.now() > this.startTime + this.interval) this.startTime = Date.now() + this.interval;
		}
	}

	work(): void {
		this.createNewSparks();
		super.work();
	}
}
