import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService {
  searchQueryObservable : Subject<any> = new Subject<any>();

  constructor() { }
}
