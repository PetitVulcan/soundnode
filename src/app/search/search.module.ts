import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';

@Component({
  selector:'search-root',
  templateUrl:'./search/search.component.html',
  styleUrls:['./search/search.component.css']
})

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
