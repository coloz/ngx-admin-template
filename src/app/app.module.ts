import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { AuthState } from './core/auth/auth.state';
import { environment } from 'src/environments/environment';
import { ServerInterceptor } from './core/interceptor/server.interceptor';
import { ReaderService } from './core/services/reader.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([AuthState], { developmentMode: !environment.production }),
    NgxsStoragePluginModule.forRoot({ storage: StorageOption.LocalStorage })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true },
    AuthService,
    ReaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
