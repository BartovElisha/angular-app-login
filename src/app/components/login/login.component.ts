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

  ngOnInit(): void {
    if(this.userService.isLoggedIn()) {
      this.route.navigate(['/dashboard']);  
    }
  }

}
