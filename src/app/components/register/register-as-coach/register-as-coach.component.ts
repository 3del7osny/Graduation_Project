import { Component } from '@angular/core';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-as-coach',
  templateUrl: './register-as-coach.component.html',
  styleUrls: ['./register-as-coach.component.css']
})
export class RegisterAsCoachComponent {
  title_coach = "Coach";
  title_trainee ="Trainee"
  faUser =faUserPlus;
  imageSrc = '../../../assets/image/avatar.png';

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      reader.readAsDataURL(file);
    }

  }
}
