import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  baseUrl = 'http://localhost:4201/';

  constructor(private http: HttpClient) { }

  getApi = (link) =>{
    return this.http.get(this.baseUrl + link);
  } 

  postApi = (link, data) =>{
    return this.http.post(this.baseUrl + link , data);
  }
}
