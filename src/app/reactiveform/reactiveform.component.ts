import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password:new FormControl("", Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }
  submitHandler(){
    console.log(this.loginForm.value);
  }
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
}
