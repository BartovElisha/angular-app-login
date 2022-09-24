import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private route: Router) { }

  private _isLoggedIn: boolean = false;
  // private _isLoggedIn: boolean = true;

  isLoggedIn() {
    if(this._isLoggedIn) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}