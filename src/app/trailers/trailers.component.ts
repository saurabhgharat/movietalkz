import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent implements OnInit {
  videos: any;
  p: number = 1;
  constructor(private userService:UserService) { }
 
  ngOnInit() {
    this.userService.getLatestTrailers().subscribe((data:any) => {
      this.videos =  data.items;
    
    })
  }

}
