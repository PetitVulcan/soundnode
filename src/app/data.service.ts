import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  baseUrl = 'http://localhost:4201/';

  constructor(private http: HttpClient) { }

  getApi = (link) => this.http.get(`${this.baseUrl}${link}`);

  postApi = (link, data) => this.http.post(`${this.baseUrl}${link}`, data);

}
