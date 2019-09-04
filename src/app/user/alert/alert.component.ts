import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements AfterViewInit {

  @ViewChild('contenuPopUp', { static: false, read: ViewContainerRef }) contenuPopUp: ViewContainerRef;
  type;
  parentContainer;
  config: any;
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.contenuPopUp.clear();
    const factory = this.resolver.resolveComponentFactory(this.config.type);
    this.contenuPopUp.createComponent(factory);
  }

  hide = () => {
    this.contenuPopUp.clear();
    this.config.parentContainer.clear();
  }
}
