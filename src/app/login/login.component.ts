import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username = "";
  password = "";
  errMsg = "";

  ngOnInit():void{

  }

  constructor(private auth: AuthService, private router: Router ){

  }

  login(){
    if(this.username.trim().length === 0){
      this.errMsg = "Username is required!";
    }else if(this.password.trim().length === 0){
      this.errMsg = "Password is required!";
    }else{
      this.errMsg = "";
      let res = this.auth.login(this.username,this.password);
      if(res === 200){
        this.router.navigate(['home']);
      }else if(res === 403){
        this.errMsg = "Invalid credentials!!"
      }
    }
  }
}
