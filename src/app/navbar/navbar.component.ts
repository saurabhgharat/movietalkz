import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firstname: string;
  user;
  lastname: string;
  username: string;

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit() {
    $('.nav-link').click(function () {
      $('.navbar-collapse').collapse('hide');
    });
    $('.dropdown-item').click(function () {
      $('.navbar-collapse').collapse('hide');
    });
  }


  logout() {
    this.userService.logOut()
    this.router.navigate(["/login"])
  }



}
