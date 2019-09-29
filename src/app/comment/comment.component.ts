
import { UserService } from './../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



declare var $: any;


@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Output() UpdateCommentEvent = new EventEmitter;
  @Input() moviearray;
  @Input() id;

  @Input() lastname
  @Input() firstname



  commentform: FormGroup;
  movieid: string;
  commentmessage: string;
  comments;
  clicked: boolean;
  newcomment: Object;
  comment: Object;
  editable = false;
  commentid: any;
  postcomment = true;
  showsubmitbutton = true;





  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {



    this.commentform = new FormGroup({
      comment: new FormControl('', Validators.required),
      user: new FormControl(this.id),
      firstname: new FormControl(this.firstname),
      lastname: new FormControl(this.lastname)
    })

    this.route.paramMap.subscribe(params => {

      this.movieid = params.get('id');


    })



  }
  ngOnChanges() {
    this.movieid;
    this.userService.getMovieComments(this.moviearray._id).subscribe(data => {
      this.comments = data;

    }, err => console.log(err));

  }
  postblock() {
    this.showsubmitbutton = true;
  }
  getComments() {

    this.userService.getMovieComments(this.moviearray._id).subscribe(data => {
      this.comments = data;

    }, err => console.log(err));

  }
  onSubmit(body) {

    this.userService.postComment(body, this.movieid, this.moviearray.film).subscribe(err => {
      console.log(err)
    });
    this.commentform.controls['comment'].reset()
    this.getComments()



  }

  updateComment(comment) {
    this.editable = true;
    this.postcomment = false;
    this.showsubmitbutton = false;
    this.commentid = comment._id

    this.commentform.patchValue({
      comment: comment.comment,

    })

  }
  updateValue(comment) {

    this.userService.updateComment(comment, this.commentid).subscribe(result => { this.comment = result; console.log(this.comment) }, error => console.log(error))
    this.getComments()
  }
  postComment() {
    this.postcomment = true;
  }
  deleteComment(comment) {

    let commentlist = this.comments;
    this.userService.deleteComment(comment._id).subscribe(data => {

      for (let i = 0; i < commentlist.length; i++) {
        if (commentlist[i] == comment._id) {
          commentlist.splice(i, 1)
        }
      }



    })

    this.getComments()
  }
}



