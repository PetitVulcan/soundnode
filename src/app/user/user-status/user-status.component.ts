import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AlertComponent } from '../alert/alert.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { LoaderComponent } from '../loader/loader.component';


@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  @ViewChild("popup", { static: false, read: ViewContainerRef }) maPopUp: ViewContainerRef;
  
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  loadComponentLogin = () => {
    this.loadComponentLoader();
    setTimeout(() => {
      this.maPopUp.clear();
      const factory = this.resolver.resolveComponentFactory(AlertComponent);

      const element = this.maPopUp.createComponent(factory);
      element.instance.config = { type: LoginComponent, parentContainer: this.maPopUp }
    }, 3000)
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
