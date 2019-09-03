import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../../data.service';
import { UserModel } from '../../models/user.model';
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: UserModel;
  formAddUser: FormGroup = this.fb.group({
    'id': [''],
    'pseudo': [''],
    'nom': [''],
    'prenom': [''],
    'email': [''],
    'mdp': [''],
    'cMdp': [''],
  })
  constructor(private http: HttpClient, private data: DataService, private fb: FormBuilder) {

  }
  ngOnInit() {
  }
  valider = () => {
    this.data.postApi('addUser', this.formAddUser.value).subscribe((res: any) => {
      if (res.error) {
        alert("Error insertion");
      }
      else {
        alert("Utilisateur ajouté");
      }
    })
  }
}

