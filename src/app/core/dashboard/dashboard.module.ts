import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BaseComponent } from './base/base.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from 'src/app/pages/pages.module';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
        // component:PagesModule
      },
    ]
  },
];

@NgModule({
  declarations: [
    BaseComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    // PagesModule
  ],
  exports: [
    BaseComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class DashboardModule { }
