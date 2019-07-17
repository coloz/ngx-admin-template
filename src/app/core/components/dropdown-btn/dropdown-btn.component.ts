import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'dropdown-btn',
  templateUrl: './dropdown-btn.component.html',
  styleUrls: ['./dropdown-btn.component.scss']
})
export class DropdownBtnComponent implements OnInit {

  @Input() list = [
    { text: null }
  ];

  @Output() selected=new EventEmitter();

  selectedItem;

  isDropdown = true;

  constructor() { }

  ngOnInit() {
    this.selectedItem = this.list[0]
  }

  selectItem(item) {
    this.selectedItem = item;
    this.selected.emit(item);
  }



}
