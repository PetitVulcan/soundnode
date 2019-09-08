import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('popUp',{static:false, read : ViewContainerRef}) popUp : ViewContainerRef;

  getPopUpContainer() {
    return this.popUp;
  }  
}
