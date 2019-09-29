import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latestnews',
  templateUrl: './latestnews.component.html',
  styleUrls: ['./latestnews.component.css']
})
export class LatestnewsComponent implements OnInit {
  latestnews;
  latestarticles: any;
  articles;
  p: number = 1;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLatestNews().subscribe(data => {
      this.latestnews = data;
      this.latestarticles = this.latestnews.articles;
    }, error => console.log(error))
  }

}
