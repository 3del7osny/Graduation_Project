import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login-as-trainee',
  templateUrl: './login-as-trainee.component.html',
  styleUrls: ['./login-as-trainee.component.css']
})
export class LoginAsTraineeComponent  {
  title_trainee = "Trainee";
  title_coach = "Coach";
  faLock =faLock;
  SignIn(){
    const loginService = new LoginService();
    loginService.OnSignInClick(this.title_trainee);
  }
}

