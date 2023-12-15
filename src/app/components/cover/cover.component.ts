import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']); // Replace '/' with the path of your home page
  }
}
