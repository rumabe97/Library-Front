import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { searchUser } from '../user/application/searchUser'
import { UserService } from '../user/infrastructure/services/UserService';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  notLogin:boolean=false;

  constructor(private router: Router,
              private _userService: UserService,
              private fb: FormBuilder,
              private _route: ActivatedRoute,
              private _navCtrl: NavController) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {

    this.form = this.fb.group({
        email: ['',Validators.required],
        password: ['',Validators.required],
    });
  }

  log(){
    if(this.form.valid){
      searchUser(this.form.value,this._userService).subscribe(r=>{
        if(r.content.length>0)this.router.navigate([`./tabs/tabs/tab1`], {relativeTo: this._route});
        if(r.content.length===0) this.notLogin=true;
      })
    }
  }


}
