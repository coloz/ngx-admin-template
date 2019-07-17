import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output()
  keywordChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onEnter(value: string) {
    this.keywordChanged.emit(value)
  }

}
