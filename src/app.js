// https://github.com/blacksonic/angular2-babel-esnext-starter

import 'es6-shim';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app/core/app.routes';
import { CORE_PROVIDERS, CORE_DECLARATIONS, AppComponent } from './app/core';
//import { AUTH_PROVIDERS, AUTH_DECLARATIONS } from './app/auth';
//import { POSTS_PROVIDERS, POSTS_DECLARATIONS } from './app/posts';

import '../less/app.less'

const ENVIRONMENT = process.env.NODE_ENV

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

console.log('APPP', process)

@NgModule({
  declarations: [ CORE_DECLARATIONS ],
  imports: [
    HttpModule, BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  providers: [
    CORE_PROVIDERS,
    { provide: 'ENVIRONMENT', useValue: ENVIRONMENT }
  ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule);
