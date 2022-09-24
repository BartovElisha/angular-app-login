import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private route: Router) { }

  isLoggedIn(): boolean {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if(isLoggedIn) {
      if(JSON.parse(isLoggedIn)) {
        return true;
      }      
    }

    // Go to login page if still not logged in !!!
    this.route.navigate(['/login']);
    return false;
  }

  checkEmailAndPassword(email:string, password:string): boolean {
    if(email == 'alisher.b@gmail.com' && password == '1234') {
      this.saveToLocalStorage(true);
      return true;
    }
    return false;
  }

  logout() {
    this.saveToLocalStorage(false);
    this.route.navigate(['/login']);
  }

  saveToLocalStorage(isLoggedIn:boolean) {
    localStorage.setItem('isLoggedIn',JSON.stringify(isLoggedIn));
  }
}
