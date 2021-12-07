import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private role = '';
  private isLogin = false;
  constructor() {}

  get userRole(): string {
    return this.role;
  }
  set userRole(role: string) {
    this.role = role;
  }

  get login(): boolean {
    return this.isLogin;
  }

  set login(val: boolean) {
    this.isLogin = val;
  }
}
