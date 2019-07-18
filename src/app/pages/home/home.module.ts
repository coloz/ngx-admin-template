import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
	imports: [
		CommonModule,
		NgbModule,
		CoreComponentsModule,
		MarkdownModule.forRoot(),
		RouterModule.forChild([
			{
				path: '',
				component: HomeComponent
			},
		]),
	],
	providers: [],
	declarations: [
		HomeComponent
	],
	exports: [HomeComponent]
})
export class HomeModule {
}
