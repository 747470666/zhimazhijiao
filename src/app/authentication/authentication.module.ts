import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { authentication } from './authentication.component';


export const routes = [
  { path: '', component: authentication, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    authentication
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class authenticationModule {
  static routes = routes;
}
