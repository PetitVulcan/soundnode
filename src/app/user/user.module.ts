import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';
import { UserStatusComponent } from './user-status/user-status.component';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';

const mesRoutes : Routes = [
  {
    path: '', component:  LoginComponent, children: [
      { path: 'login', component:  LoginComponent },
      { path: 'signin', component: SignInComponent },
    ]
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    UserStatusComponent,
    AlertComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(mesRoutes)    
  ],
  providers: [DataService],
  // bootstrap: [UserComponent]
})
export class UserModule { }
