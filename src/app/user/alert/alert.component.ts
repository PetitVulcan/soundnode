import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements AfterViewInit {  
  top = '0';
  left = '0';
  type:any;
  load = true;
  parentContainer:any;
  config: any;
  @ViewChild('contenuPopUp', { static: false, read: ViewContainerRef }) contenuPopUp: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.contenuPopUp.clear();
    setTimeout(()=> {
      this.load = false;
    const factory = this.resolver.resolveComponentFactory(this.config.type);
    const component = this.contenuPopUp.createComponent(factory);
    const element = <any>(component.instance);
    element.end.subscribe(res=> {
      this.parentContainer.clear();
    })
  }, 1000)
  }

  hide = () => {
    this.contenuPopUp.clear();
    this.config.parentContainer.clear();
  }
}
