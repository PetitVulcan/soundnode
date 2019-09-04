import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';
<<<<<<< HEAD
import { UserComponent } from './user/user.component';
=======
import { UserStatusComponent } from './user-status/user-status.component';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
>>>>>>> e834b5e2190fa09d64037fd5d0c135c64496f4ec

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
<<<<<<< HEAD
    UserComponent
=======
    UserStatusComponent,
    AlertComponent,
    LoaderComponent
>>>>>>> e834b5e2190fa09d64037fd5d0c135c64496f4ec
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(mesRoutes)    
  ],
  providers: [DataService],
<<<<<<< HEAD
  bootstrap: [UserComponent]
=======
  // bootstrap: [UserComponent]
>>>>>>> e834b5e2190fa09d64037fd5d0c135c64496f4ec
})
export class UserModule { }
