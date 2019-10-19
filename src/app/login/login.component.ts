import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginParams: any = {};

  constructor(private autorizationService: AutorizacionService) {
  }
  login() {
    this.autorizationService.login(this.loginParams.email, this.loginParams.password);
  }
  facebookLogin() {
    this.autorizationService.facebookLogin();
  }
}
