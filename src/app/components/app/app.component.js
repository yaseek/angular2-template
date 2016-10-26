import { Component, Inject } from '@angular/core'; // eslint-disable-line no-unused-vars

import template from './app.template.jade';

@Component({
  selector: 'app',
  template: template()
})
export class AppComponent {

  constructor(@Inject('ENVIRONMENT') environment/*, translate: TranslateService*/) {
    this.environment = environment;

    console.log('APP COMPONENT', this);

  }
}