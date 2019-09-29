import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-movieyears',
  templateUrl: './movieyears.component.html',
  styleUrls: ['./movieyears.component.css']
})
export class MovieyearsComponent implements OnInit {
  public year;
  selectedmovie: any;
  user;
  id: any;
  movie: any;
  lastname: any;
  firstname: any;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.year = params.get('year');
    })
    this.userService.getUsername().subscribe(data => {
      this.user = data;
      this.firstname = this.user.firstname;
      this.lastname = this.user.lastname;
      this.id = this.user._id;
    })

  }
  onSelectMovie(movie) {
    this.selectedmovie = movie;


  }

}
