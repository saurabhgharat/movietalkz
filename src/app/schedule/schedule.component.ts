import { UserService } from './../user.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  data: Object;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getSchedule().subscribe(data => this.data = data, error => console.log(error))
  }

}
