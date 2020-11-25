import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { BookkingComponent } from './bookking/bookking.component';
import { GuestComponent } from './guest/guest.component';
import { PaymentComponent } from './payment/payment.component';
import { RoomComponent } from './room/room.component';
import { ServiceComponent } from './service/service.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    RoomComponent,
    BookkingComponent,
    PaymentComponent,
    ServiceComponent,
    GuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
