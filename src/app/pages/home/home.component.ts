import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/core/services/reader.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

	items = [
		{ text: 'item1' },
		{ text: 'item2' },
		{ text: 'item3' },
		{ text: 'item4' },
		{ text: 'item5' },
	]

	constructor(
		private readerService: ReaderService
	) {
	}

	ngOnInit() {
		console.log('getfile');

		this.readerService.getSource('docs/000-首页.md').subscribe(data => {
			console.log(data);
			this.generateCatalog(data);
		})
	}



	keywordChanged(e) {

	}

	generateCatalog(mdtext) {
		let lines = mdtext.split('\n');
		for (const line of lines) {
			if (line.indexOf('# ') == 0) console.log(line);
			if (line.indexOf('## ') == 0) console.log(line);
			if (line.indexOf('### ') == 0) console.log(line);
			if (line.indexOf('#### ') == 0) console.log(line);
			if (line.indexOf('##### ') == 0) console.log(line);
		}

	}

}
