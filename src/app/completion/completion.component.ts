import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'completion',
  styleUrls: [ './completion.style.scss' ],
  templateUrl: './completion.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'completion-page app'
  }
})
export class completion {
  constructor() {

  }
}
