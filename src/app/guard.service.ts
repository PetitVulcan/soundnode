import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router"
import { DataService } from './data.service';
import { Subject, Observable } from 'rxjs';
@Injectable()
export class GuardService implements CanActivate {

  isLogged = new Subject<any>();
  constructor(private data: DataService) {

  }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return Observable.create((observe) => {
      this.data.postApi('isLogged', { id: localStorage.getItem('id'), token: localStorage.getItem('token') }).subscribe((res: any) => {
            observe.next(!res.error);
          },(err) => {
            observe.next(false);
          })
      })
    }
}
