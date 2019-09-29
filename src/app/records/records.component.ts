import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  data: Object;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getRecords().subscribe(data => this.data = data, error => console.log(error))
  }

}
