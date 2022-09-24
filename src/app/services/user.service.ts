import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private route: Router) { }

  private _isLoggedIn: boolean = false;

  isLoggedIn(): boolean {
    if(this._isLoggedIn) {
      return true;
    }
    // Go to login page if still not logged in !!!
    this.route.navigate(['/login']);
    return false;
  }

  checkEmailAndPassword(email:string, password:string): boolean {
    if(email == 'alisher.b@gmail.com' && password == '1234') {
      this._isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout() {
    this._isLoggedIn = false;
    this.route.navigate(['/login']);
  }
}
