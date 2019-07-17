import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridBoxComponent } from './grid-box/grid-box.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DropdownBtnComponent } from './dropdown-btn/dropdown-btn.component';



@NgModule({
  declarations: [
    GridBoxComponent,
    SearchBoxComponent,
    DropdownBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridBoxComponent,
    SearchBoxComponent,
    DropdownBtnComponent
  ]
})
export class CoreComponentsModule { }
