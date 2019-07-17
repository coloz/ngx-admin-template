import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-box',
  templateUrl: './grid-box.component.html',
  styleUrls: ['./grid-box.component.scss']
})
export class GridBoxComponent implements OnInit {

  @Input() title = 'title';
  @Input() showSearch = false;

  constructor() { }

  ngOnInit() {
  }

}
