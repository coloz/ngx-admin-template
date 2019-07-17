import { Component, OnInit } from '@angular/core';
import { MenuList, UserMenuList } from 'src/app/configs/menu.config';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title;
  titleListObject = {};

  action = 'show';

  get userMenuList() {
    return UserMenuList
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getTitleList(MenuList);
    this.getTitleList(UserMenuList);
    this.title = this.titleListObject[this.router.url]
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.action = 'wait';
        setTimeout(() => {
          this.action = 'show';
          this.title = this.titleListObject[event.url]
        }, 100);
      }

    })
  }

  getTitleList(menu) {
    for (const item of menu) {
      if (typeof item.submenu != 'undefined') {
        this.getTitleList(item.submenu);
      } else if (typeof item.page != 'undefined') {
        this.getTitleObject(item);
      }
    }
  }

  getTitleObject(item) {
    if (typeof item.page != 'undefined' && typeof item.title != 'undefined')
      this.titleListObject[item.page] = item.title
  }

  toDo(action) {
    if (action == 'logout') {
      this.authService.logout();
      this.router.navigate(['/auth'])
    }
  }

}
