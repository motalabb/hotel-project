import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookkingComponent } from './bookking/bookking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestComponent } from './guest/guest.component';
import { LayoutComponent } from './layout/layout.component';
import { PaymentComponent } from './payment/payment.component';
import { RoomComponent } from './room/room.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'room', component: RoomComponent
      },
      {
        path: 'booking', component: BookkingComponent
      },
      {
        path: 'payment', component: PaymentComponent
      },
      {
        path: 'service', component: ServiceComponent
      },
      {
        path: 'guest', component: GuestComponent
      },

      {
        path: '**', redirectTo: 'dashboard'
      },
    ]

  },
  {
    path: '**', redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
