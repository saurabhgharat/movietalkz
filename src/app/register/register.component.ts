import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errormessage: any;

  constructor(private userService: UserService, private router: Router) { }
  registerform;

  ngOnInit() {
    this.registerform = new FormGroup({
      firstname: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl("", [Validators.required, this.passValidator])
    })
  }

  get firstname() {
    return this.registerform.get('firstname')
  }
  get lastname() {
    return this.registerform.get('lastname')
  }
  get email() {
    return this.registerform.get('email')
  }
  get password() {
    return this.registerform.get('password')
  }
  get cpassword() {
    return this.registerform.get('cpassword')
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cpasswordValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cpasswordValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }
  onSubmit(data) {

    this.userService.registerUser(data).subscribe(res => { this.router.navigate(['/login']) }, error => { this.errormessage = error });

  }


}
