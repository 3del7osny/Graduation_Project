import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-as-trainee2',
  templateUrl: './register-as-trainee2.component.html',
  styleUrls: ['./register-as-trainee2.component.css']
})
export class RegisterAsTrainee2Component {
// Component Variables
title_coach = "Coach";
title_trainee = "Trainee";
submitted = false;
medicalCondition!: string;
medicalDetails!: string;
trainingForm!: FormGroup;

// Constructor
constructor(private fb: FormBuilder, private router: Router) {}

// Initialize the form with form controls and validators
ngOnInit() {
  this.trainingForm = this.fb.group({
    experience:  ['', Validators.required],
    coach:       ['', Validators.required],
    startDate:   ['', Validators.required],
    time:        ['', Validators.required],
    period:      ['', Validators.required],
    court:       ['', Validators.required],
    medical:     ['', Validators.required],
    medicalDetails: [''],
  });
}

// Form Submission
onSubmit() {
  // Handle your form submission

  this.submitted = true;
  if (this.trainingForm.invalid) {
    return;
  }
  console.log(this.trainingForm.value);
  this.router.navigate(['/profileT']);

  // Successful submission message
  const messageBox = document.createElement("div");
  messageBox.innerHTML = "Successful Sign Up! :)";
  messageBox.style.backgroundColor = "#4CAF50";
  messageBox.style.color = "white";
  messageBox.style.padding = "10px";
  messageBox.style.position = "fixed";
  messageBox.style.top = "50%";
  messageBox.style.left = "50%";
  messageBox.style.transform = "translate(-50%, -50%)";
  messageBox.style.zIndex = "9999";
  document.body.appendChild(messageBox);

  // Hide the message box after 3 seconds
  setTimeout(function () {
    messageBox.style.display = "none";
  }, 3000);
}

// Medical Condition Change Event
onMedicalConditionChange() {
  this.medicalCondition = this.trainingForm.get('medical')!.value;
  const medicalDetailsControl = this.trainingForm.get('medicalDetails');

  if (this.medicalCondition === 'no' && medicalDetailsControl) {
    medicalDetailsControl.clearValidators();
  } else if (this.medicalCondition === 'yes' && medicalDetailsControl) {
    medicalDetailsControl.setValidators([Validators.required]);
  }

  medicalDetailsControl!.updateValueAndValidity();
}

}

