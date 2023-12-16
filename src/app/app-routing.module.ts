import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourtsComponent } from './components/courts/courts.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { LoginAsTraineeComponent } from './components/login/login-as-trainee/login-as-trainee.component';
import { LoginAsCoachComponent } from './components/login/login-as-coach/login-as-coach.component';
import { RegisterAsCoachComponent } from './components/register/register-as-coach/register-as-coach.component';
import { RegisterAsTraineeComponent } from './components/register/register-as-trainee/register-as-trainee.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { CoverComponent } from './components/cover/cover.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AdditionComponent } from './components/addition/addition.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',     component:HomeComponent},
  {path:'coaches',  component:CoachesComponent},
  {path:'courts',   component:CourtsComponent},
  {path:'logt',     component:LoginAsTraineeComponent},
  {path:'logc',     component:LoginAsCoachComponent},
  {path:'forget',   component:ForgetPasswordComponent},
  {path:'regt',     component:RegisterAsTraineeComponent},
  {path:'regc',     component:RegisterAsCoachComponent},
  {path:'cover',    component:CoverComponent},
  {path:'add',    component:AdditionComponent},

  {path:'**',       component:ErrorsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
