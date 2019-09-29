import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges, SimpleChange } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SlugifyPipe } from 'angular-pipes';

@Component({
  selector: 'moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css'],
 
})
export class MoviedetailComponent implements OnInit {


  @Input() lastname
  @Input() firstname
  @Input() movie

  @Input() id;




  comments: Object;


  moviearray: any;
  comment: Object;
  constructor(private userService: UserService) {

  }
  ngOnChanges() {

    this.moviearray = this.movie;


  }
  ngOnInit() {

  }

  
}
