import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild("popup", { static: false, read: ViewContainerRef }) maPopUp: ViewContainerRef;
  constructor() { }

  ngOnInit() {
  }

}
