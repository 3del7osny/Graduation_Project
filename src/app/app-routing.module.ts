import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourtsComponent } from './components/courts/courts.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { LoginAsTraineeComponent } from './components/login/login-as-trainee/login-as-trainee.component';
import { LoginAsCoachComponent } from './components/login/login-as-coach/login-as-coach.component';
import { RegisterAsCoachComponent } from './components/register/register-as-coach/register-as-coach.component';
import { RegisterAsTraineeComponent } from './components/register/registerTrainee/register-as-trainee/register-as-trainee.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterAsTrainee2Component } from './components/register/registerTrainee/register-as-trainee2/register-as-trainee2.component';
import { ProfileTraineeComponent } from './components/profile-trainee/profile-trainee.component';
import { ProfileCoachComponent } from './components/profile-coach/profile-coach.component';
import { AdminComponent } from './components/admin/admin.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',     component:HomeComponent},
  {path:'coaches',  component:CoachesComponent},
  {path:'courts',   component:CourtsComponent},
  {path:'logt',     component:LoginAsTraineeComponent},
  {path:'logc',     component:LoginAsCoachComponent},
  {path:'forget',   component:ForgetPasswordComponent},
  {path:'step1t',     component:RegisterAsTraineeComponent},
  {path:'regt',     component:RegisterAsTrainee2Component},
  {path:'regc',     component:RegisterAsCoachComponent},
  {path:'profileT',     component:ProfileTraineeComponent},
  {path:'profileC',     component:ProfileCoachComponent},
  {path:'admin',    component:AdminComponent},


  {path:'**',       component:ErrorsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
