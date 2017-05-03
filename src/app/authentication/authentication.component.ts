import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'authentication',
  styleUrls: [ './authentication.style.scss' ],
  templateUrl: './authentication.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'authentication-page app'
  }
})
export class authentication {
  constructor() {

  }
}
