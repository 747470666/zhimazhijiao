import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { completion } from './completion.component';

export const routes = [
  { path: '', component: completion, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    completion
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class completionModule {
  static routes = routes;
}
