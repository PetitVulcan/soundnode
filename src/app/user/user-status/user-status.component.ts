import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AlertComponent } from '../alert/alert.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { LoaderComponent } from '../loader/loader.component';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { GuardService } from 'src/app/guard.service';


@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  @ViewChild("popup", { static: false, read: ViewContainerRef }) maPopUp: ViewContainerRef;
  user:any = undefined;
  userId;
  imgUrl;
  token = '';
  displayLoader = false
  constructor(private resolver: ComponentFactoryResolver,private data:DataService, private router:Router,private guard:GuardService, private app:AppComponent) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      };
  }

  ngOnInit() {
    this.getUser();
    this.guard.isLogged.subscribe((res)=> {
      if(res) {
        this.getUser();
      }
      else {
        this.user = undefined;
      }
    })
  }
  getUser = () => {
    this.data.postApi('/get-user', {id : localStorage.getItem('id'), token : localStorage.getItem('token')}).subscribe((res:any)=> {
      if(res.error) {
        this.user = undefined;
      }
      else {
        this.user = res.user
        console.log(this.user);
      }
    })
  }
  logOut = () =>{
    this.data.postApi('/logout', {id : localStorage.getItem('id'), token : localStorage.getItem('token')}).subscribe((res:any)=> {
      if(!res.error){
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        this.guard.isLogged.next(false);
      }
    })
  }
  popup = (type, event) => {
    console.dir(event);
    this.app.getPopUpContainer().clear();
    const factory = this.resolver.resolveComponentFactory(AlertComponent);
    const component = this.app.getPopUpContainer().createComponent(factory);
    component.instance.top = event.clientY + 'px';
    component.instance.left = (event.clientX + 25) + 'px';
    component.instance.parentContainer = this.app.getPopUpContainer()
    switch(type) {
      case 'login':
          component.instance.type = LoginComponent;
        break;
    }    
  }
  loadComponentLogin = () => {
    this.loadComponentLoader();
    this.maPopUp.clear();
    const factory = this.resolver.resolveComponentFactory(AlertComponent);
    const element = this.maPopUp.createComponent(factory);
    element.instance.config = { type: LoginComponent, parentContainer: this.maPopUp }
  }
  loadComponentSignIn = () => {
    this.maPopUp.clear();
    this.maPopUp.createComponent(this.resolver.resolveComponentFactory(AlertComponent)).instance.config = { type: SignInComponent, parentContainer: this.maPopUp };
  }

  loadComponentLoader = () => {
    this.maPopUp.clear();
    this.maPopUp.createComponent(this.resolver.resolveComponentFactory(AlertComponent)).instance.config = { type: LoaderComponent, parentContainer: this.maPopUp };
  }
}
