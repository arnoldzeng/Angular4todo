import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string): boolean {
    if (username === 'wangpeng')
      return true;
    return false;
  }
}
