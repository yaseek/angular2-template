import { Component } from '@angular/core'; // eslint-disable-line no-unused-vars

import template from './news.template.jade';

@Component({
  selector: 'news',
  template: template()
})
export class NewsComponent {

  constructor() {
    this.count = 123;

    this.objects = [
      {
        id: 1,
        text: 'text'
      },
      {
        id: 2,
        text: 'text'
      },
      {
        id: 3,
        text: 'text'
      },
      {
        id: 4,
        text: 'text'
      },
      {
        id: 5,
        text: 'text'
      }
    ]

    console.log('NEWS COMPONENT', this);

  }
}