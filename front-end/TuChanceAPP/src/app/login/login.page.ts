import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password);
  }
}
