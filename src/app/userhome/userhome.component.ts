import { SlugifyPipe } from 'angular-pipes';

import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  user;
  errors: any;
  firstname: any;
  lastname: any;
  id;
  comments;

  creation_dt: any;

  constructor(private userService: UserService, private router: Router) {

    if (this.userService.getUsername()) {
      this.userService.getUsername().subscribe(data => {
        this.user = data;
        this.lastname = this.user.lastname;
        this.firstname = this.user.firstname;
        this.creation_dt = this.user.creation_dt;
        this.id = this.user._id;
        console.log(data);



      })
    }
    else {

      this.router.navigate(["/login"])
    }

  }



  ngOnInit() {


  }

}
