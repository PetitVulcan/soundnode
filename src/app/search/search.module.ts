import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { Routes } from '@angular/router';

const routes : Routes = [
  {path:'',component:SearchComponent,children:[
    {path:'search',component : SearchComponent },
 ]}
]

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
