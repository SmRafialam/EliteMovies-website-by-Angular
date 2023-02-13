import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: Router,private auth: AuthService){

  }

  goToHome(){
    this.route.navigate(['home']);
  }

  logout(){
    this.auth.logout();
  }
}
