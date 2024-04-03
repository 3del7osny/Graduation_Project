import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login-as-trainee',
  templateUrl: './login-as-trainee.component.html',
  styleUrls: ['./login-as-trainee.component.css']
})
export class LoginAsTraineeComponent  {
  faLock =faLock;

  constructor(private loginService: LoginService) {}

  SignIn() {
    // Use the injected service to call the sign-in method
    console.log("login")
  }
}

