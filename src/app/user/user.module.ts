import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';
import { AppComponent } from '../app.component';

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
    SignInComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(mesRoutes)    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class UserModule { }
