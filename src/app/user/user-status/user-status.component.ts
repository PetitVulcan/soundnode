import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AlertComponent } from '../alert/alert.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { LoaderComponent } from '../loader/loader.component';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  @ViewChild("popup", { static: false, read: ViewContainerRef }) maPopUp: ViewContainerRef;
  user;
  userId;
  imgUrl;
  token;
  displayLoader = false
  constructor(private resolver: ComponentFactoryResolver,private data:DataService, private router:Router) { }

  ngOnInit() {
    const token = (localStorage.getItem('token')  ) ? localStorage.getItem('token') : '';
    const user = localStorage.getItem('userlogin');
    const userId = localStorage.getItem('userId');
    const userImg = localStorage.getItem('userImg');
    this.user = user;
    this.token = token;
    this.userId = userId;
    this.imgUrl = userImg;
  }
  logOut = () =>{
    this.displayLoader = true;
    this.data.postApi('logOut',{id:this.userId, token:this.token}).subscribe((res:any)=> {      
        if(res.logged){
          localStorage.setItem('token',res.user.token);
          localStorage.setItem('userId',res.user.id);
          this.router.navigate(['/tracks'])
          alert("User disconnected")
        }
        else {
          alert("Erreur disconnection");
        }
        this.displayLoader = false;     
    })
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
