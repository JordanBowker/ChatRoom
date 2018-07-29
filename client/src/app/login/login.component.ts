import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'chat-room-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder, 
              private readonly _router : Router,
              private readonly _userService : UserService) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required]
    })
  }

  onSubmit(){
    this._userService.setUsername(this.loginForm.controls.username.value);
    this._router.navigate(['/chat']);
  }
}
