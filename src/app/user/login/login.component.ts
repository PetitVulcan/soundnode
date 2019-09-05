import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;
  mdp;
  displayLoader = false
  constructor(private data:DataService, private router:Router) { }

  ngOnInit() {
  }
  logOut = () =>{
    this.displayLoader = true;
    this.data.postApi('logOut',{login:this.login, mdp:this.mdp}).subscribe((res:any)=> {      
        if(res.logged){
          localStorage.setItem('token',res.user.token);
          localStorage.setItem('userlogin',res.user.login);
          localStorage.setItem('userId',res.user.id);
          localStorage.setItem('userImg',res.user.imgUrl);
          this.router.navigate(['/tracks'])
          alert("User connected")
        }
        else {
          alert("Erreur connection");
        }
        this.displayLoader = false;     
    })
  }
  logIn = () => {
    this.displayLoader = true;
    this.data.postApi('login',{login:this.login, mdp:this.mdp}).subscribe((res:any)=> {      
        if(res.logged){
          localStorage.setItem('token',res.user.token);
          localStorage.setItem('userlogin',res.user.login);
          localStorage.setItem('userId',res.user.id);
          localStorage.setItem('userImg',res.user.imgUrl);
          this.router.navigate(['/tracks'])
          alert("User connected")
        }
        else {
          alert("Erreur connection");
        }
        this.displayLoader = false;     
    })
  }
}
