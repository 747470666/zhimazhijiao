import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [{
  path: '', redirectTo: 'app', pathMatch: 'full'
}, {
  path: 'app',   loadChildren: './layout/layout.module#LayoutModule'
}, {
  path: 'login', loadChildren: './login/login.module#LoginModule'
}, {
  path: 'register', loadChildren: './register/register.module#registerModule'
}, {
  path: 'authentication', loadChildren: './authentication/authentication.module#authenticationModule'
}, {
  path: 'completion', loadChildren: './completion/completion.module#completionModule'
}, {
  path: 'error', component: ErrorComponent
}, {
  path: '**',    component: ErrorComponent
}
];
