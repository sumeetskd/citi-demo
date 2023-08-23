import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  loggedIn = false;
  loggedOut = true;
  username = 'S'; // Replace with actual username

  login() {
    this.loggedIn = true;
    this.loggedOut = false;
  }

  logout() {
    this.loggedIn = false;
    this.loggedOut = true;
  }
  
}
