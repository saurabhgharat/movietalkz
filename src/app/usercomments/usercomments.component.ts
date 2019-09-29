import { UserService } from './../user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'usercomments',
  templateUrl: './usercomments.component.html',
  styleUrls: ['./usercomments.component.css']
})
export class UsercommentsComponent implements OnInit {
  @Input() id;
  comments;
  movie: any;
  comment: any;
  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getComments(this.id).subscribe(data => {
      this.comments = data;

    }, error => console.log(error))
  }

}
