import BaseSpark from './BaseSpark';

export default class View {
	private preCanvas: HTMLElement;
	private width: number;
	private height: number;
	private playGround: boolean[][] = [];

	constructor(width: number, height: number) {
		this.preCanvas = document.getElementsByTagName('pre')[0];
		this.width = width;
		this.height = height;
		this.prepareScreen();
	}

	private prepareScreen(): void {
		this.playGround.splice(0, this.playGround.length);
		//row
		for (let i = 0; i < this.height; i++) {
			const row = [];
			//cell
			for (let j = 0; j < this.width; j++) {
				row.push(false);
			}
			this.playGround.push(row);
		}
	}

	draw(sparks?: BaseSpark[]): void {
		this.prepareScreen();
		if (sparks) {
			//sparks to arr
			for (const spark of sparks) {
				if (spark.getX() >= 0 && spark.getX() < this.width && spark.getY() >= 0 && spark.getY() < this.height) {
					this.playGround[spark.getY()][spark.getX()] = true;
				}
			}
		}
		let preString = '';
		//array to string
		for (let i = 0; i < this.playGround.length; i++) {
			for (let j = 0; j < this.playGround[i].length; j++) {
				if (this.playGround[i][j]) preString += '@';
				else preString += '.';
			}
			preString += '\n';
		}
		//draw
		this.preCanvas.innerText = preString;
	}
}
