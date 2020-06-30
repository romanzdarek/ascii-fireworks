import View from './View';
import Fountain from './Fountain';
import Explosion from './Explosion';
import BaseFirework from './BaseFirework';

export default class Model {
	private width: number = 100;
	private height: number = 100;
	private view: View = new View(this.width, this.height);
	private fountain: Fountain = new Fountain(50, 95);
	private explosion: Explosion = new Explosion(this.width, this.height);
	private activeFirework: BaseFirework = null;

	constructor() {
		this.view.draw();
		setInterval(() => {
			this.loop();
		}, 10);
	}

	private loop(): void {
		if (this.activeFirework) {
			this.activeFirework.work();
			this.view.draw(this.activeFirework.sparks);
		}
	}

	startFountain(): void {
		this.activeFirework = this.fountain;
		this.activeFirework.reset();
	}

	startExplosion(): void {
		this.activeFirework = this.explosion;
		this.activeFirework.reset();
	}
}
