
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  news;
  articles: any;
  latestnews;
  latestarticles: any;
  videos;
  items;
  

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getNews().subscribe(data => {
      this.news = data;
      this.articles = this.news.articles;
    })
    this.userService.getLatestNews().subscribe(data => {
      this.latestnews = data;
      this.latestarticles = this.latestnews.articles;
    })
    this.userService.getLatestTrailers().subscribe((data:any) => {
      this.videos =  data.items;
    
    })
  }

}
