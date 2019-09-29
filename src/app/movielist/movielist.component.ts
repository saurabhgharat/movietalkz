import { UserService } from './../user.service';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
  outputs: ['SelectMovie']
})
export class MovielistComponent implements OnInit {
  movies;
  @Input() year;
  constructor(private userService: UserService) { }
  public SelectMovie = new EventEmitter()
  ngOnInit() {
    this.userService.getMovies().subscribe(data => this.movies = data, error => { console.log(error) })
  }
  onSelect(mov) {
    this.SelectMovie.emit(mov)
  }

}
