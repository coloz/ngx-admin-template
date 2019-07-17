import { Component, OnInit } from '@angular/core';

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

	) {
	}

	ngOnInit() {

	}

	keywordChanged(e) {

	}

}
