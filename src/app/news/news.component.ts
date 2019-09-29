import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news;
  articles;
  p: number = 1;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getNews().subscribe(data => {
      this.news = data;
      this.articles = this.news.articles;
    }, error => console.log(error))

  }


}
