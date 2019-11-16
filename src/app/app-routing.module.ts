import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboad.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
