import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `<h1>Auth Component</h1>
    <header class="row spacing">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
          <li>
            <a
              class="nav-link"
              routerLinkActive="active"
              [routerLink]="['signup']"
            >
              SignUp
            </a>
          </li>
          <li>
            <a
              class="nav-link"
              routerLinkActive="active"
              [routerLink]="['signin']"
            >
              SignIn
            </a>
          </li>
          <li>
            <a
              class="nav-link"
              routerLinkActive="active"
              [routerLink]="['logout']"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <router-outlet></router-outlet> `,
})
export class AuthenticationComponent {}
