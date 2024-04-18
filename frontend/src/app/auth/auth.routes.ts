import { Routes } from '@angular/router';

import { SignInComponent } from './signin.component';
import { SignUpComponent } from './signup.component';
import { LogoutComponent } from './logout.component';

export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  {
    path: 'signup',
    title: 'Autenticação | SignUp ',
    component: SignUpComponent,
  },
  {
    path: 'signin',
    title: 'Autenticação | SignIn ',
    component: SignInComponent,
  },
  {
    path: 'logout',
    title: 'Autenticação | Logout ',
    component: LogoutComponent,
  },
];
