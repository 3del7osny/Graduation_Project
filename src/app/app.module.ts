import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { CourtsComponent } from './components/courts/courts.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { LoginAsTraineeComponent } from './components/login/login-as-trainee/login-as-trainee.component';
import { LoginAsCoachComponent } from './components/login/login-as-coach/login-as-coach.component';
import { RegisterAsCoachComponent } from './components/register/register-as-coach/register-as-coach.component';
import { RegisterAsTraineeComponent } from './components/register/register-as-trainee/register-as-trainee.component';
import { SharedModule } from './shared/shared.module';
import { ErrorsComponent } from './components/errors/errors.component';
import { CoverComponent } from './components/cover/cover.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourtsComponent,
    CoachesComponent,
    LoginAsCoachComponent,
    LoginAsTraineeComponent,
    RegisterAsCoachComponent,
    RegisterAsTraineeComponent,
    ErrorsComponent,
    CoverComponent,
    ForgetPasswordComponent,





  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
