import { Component, OnInit } from '@angular/core';
import { MenuList } from 'src/app/configs/menu.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  get menuList() {
    return MenuList
  }

  isFold;
  showTitle;
  constructor() { }

  ngOnInit() {
    if (document.documentElement.clientWidth < 1000) {
      this.isFold = true;
      this.showTitle = false;
    }
    else {
      this.isFold = false;
      this.showTitle = true;
    }

    window.onresize = () => {
      if (document.documentElement.clientWidth < 1000 && this.isFold == false)
        this.fold()
    }
  }

  showSubmenu(item) {
    if (typeof item['showSubmenu'] == 'undefined')
      item['showSubmenu'] = true;
    else
      item['showSubmenu'] = !item['showSubmenu']
  }

  fold() {
    this.isFold = !this.isFold;
    if (!this.isFold) {
      setTimeout(() => {
        this.showTitle = true;
      }, 100);
    }
    else {
      this.showTitle = false;
    }
  }

}
