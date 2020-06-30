import Model from './Model';

export default class Controller {
	private model: Model;
	constructor() {
		this.model = new Model();
	}

	start(): void {
		document.getElementById('fountain').addEventListener('click', () => {
			this.model.startFountain();
		});
		document.getElementById('explosion').addEventListener('click', () => {
			this.model.startExplosion();
		});
	}
}
