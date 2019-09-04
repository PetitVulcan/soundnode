import { Component } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filter: string;

  constructor(
    private ss: SearchService,
  ) { }

  filterUpdate = (): void => {
    const filter = this.filter.toLowerCase();
    this.ss.searchQueryObservable.next(filter);
  }
}
