import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isAuthenticated = signal(false);

  login(): void { this.isAuthenticated.set(true); }
  logout(): void { this.isAuthenticated.set(false); }
}
