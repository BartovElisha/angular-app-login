import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private route: Router) { }

  // [ngModel] default value is:
  formData = {
    email:'', 
    password:''
  };

  ngOnInit(): void {
    if(this.userService.isLoggedIn()) {
      this.route.navigate(['/dashboard']);  
    }
  }

  login(): void {
    console.log(this.formData);
    const data = this.userService.checkEmailAndPassword(this.formData.email, 
      this.formData.password); 
    
    if(data) {
      this.route.navigate(['/dashboard']);
    }  
  }

  logout(): void {
    
    this.route.navigate(['/dashboard']);  
  }

}
