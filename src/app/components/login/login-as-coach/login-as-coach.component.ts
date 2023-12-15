import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login-as-coach',
  templateUrl: './login-as-coach.component.html',
  styleUrls: ['./login-as-coach.component.css']
})
export class LoginAsCoachComponent {
  title_coach = "Coach";
  title_trainee ="Trainee"
  faLock =faLock ;

  SignIn(){
    const loginService = new LoginService();
    loginService.OnSignInClick(this.title_coach);
  }
}
