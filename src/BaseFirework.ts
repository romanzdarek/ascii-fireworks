import BaseSpark from './BaseSpark';

export default abstract class BaseFirework {
	sparks: BaseSpark[] = [];
	protected interval: number = 0;
	protected startTime: number = 0;

	constructor() {}

	work(): void {
		for (const spark of this.sparks) {
			spark.move();
		}
		this.removeOldSparks();
	}

	reset(): void {
		this.sparks.splice(0, this.sparks.length);
		this.startTime = 0;
	}

	protected removeOldSparks(): void {
		for (let i = this.sparks.length - 1; i >= 0; i--) {
			if (this.sparks[i].isOld()) this.sparks.splice(i, 1);
		}
	}
}
