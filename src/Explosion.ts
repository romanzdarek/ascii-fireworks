import BaseFirework from './BaseFirework';
import ExplosionSpark from './ExplosionSpark';

export default class Explosion extends BaseFirework {
	private screenWidth: number;
	private screenHeight: number;

	constructor(screenWidth: number, screenHeight: number) {
		super();
		this.screenWidth = screenWidth;
		this.screenHeight = screenHeight;
		this.interval = 50;
		this.startTime = 0;
	}

	private createExplosion(): void {
		if (Date.now() > this.startTime && Math.random() < 0.2) {
			//random position
			const x = Math.floor(Math.random() * this.screenWidth);
			const y = Math.floor(Math.random() * this.screenHeight);
			const amountSparks = 25 + Math.floor(Math.random() * 25);
			for (let i = 0; i < amountSparks; i++) {
				this.sparks.push(new ExplosionSpark(x, y));
			}
			if (!this.startTime) this.startTime = Date.now();
			this.startTime += this.interval * 20;
		}
	}

	work(): void {
		this.createExplosion();
		super.work();
	}
}
