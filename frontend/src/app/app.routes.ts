import { Routes } from '@angular/router';

import { MessagesComponent } from './messages/message.component';
import { AuthenticationComponent } from './auth/authenthication.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AUTH_ROUTES } from './auth/auth.routes';

export const routes: Routes = [
  { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
  { path: 'mensagens', title: 'Mensagens', component: MessagesComponent },
  {
    path: 'autenticacao',
    title: 'Autenticação',
    component: AuthenticationComponent, children: AUTH_ROUTES
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
