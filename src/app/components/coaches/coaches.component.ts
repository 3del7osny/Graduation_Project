import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent{
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']); // Replace '/' with the path of your home page
  }
}

