import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errormessage: any;

  constructor(private userService: UserService, private router: Router) { }
  loginform;
  ngOnInit() {
    this.loginform = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }
  onLogin(data) {
    if (this.loginform.valid) {
      this.userService.loginUser(data).subscribe(res => {

        localStorage.setItem('token', res.toString())
        this.router.navigate(['/user'])
      },
        error => { this.errormessage = error }

      )
    }
  }
}
