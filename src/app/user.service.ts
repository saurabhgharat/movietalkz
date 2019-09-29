

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private postUrl = "/api/register"
  private postLogin = "/api/login"
  private getUser = "/api/profile"
  private getMov = "/api/movies"
  private postcommenturl = "/api/comments/"
  constructor(private http: HttpClient) { }
  user;

  registerUser(body) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post(this.postUrl, JSON.stringify(body), options)
  }
  loginUser(body) {

    return this.http.post(this.postLogin, body, { observe: 'body' }

    )
  }
  getUsername() {
    return this.http.get(this.getUser, { params: new HttpParams().append('token', localStorage.getItem('token')) })
  }
  loggedIn() {
    return tokenNotExpired('token')
  }
  logOut() {
    localStorage.removeItem('token');
  }
  getMovies() {
    return this.http.get(this.getMov)
  }
  postComment(body, id, movie) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post(this.postcommenturl + id + "/" + movie, JSON.stringify(body), options)
  }
  getComments(id: any) {

    return this.http.get('/api/comments/' + id)

  }
  getMovieComments(movie: any) {
    return this.http.get('/api/comment/' + movie)
  }
  getUserDetails(id) {
    return this.http.get('api/username/' + id)
  }
  getSchedule() {
    return this.http.get('./../assets/film.json')
  }
  getRecords() {
    return this.http.get('./../assets/records.json')
  }
  getNews() {

    return this.http.get('/api/news')
  }
  getLatestNews() {

    return this.http.get('/api/latestnews')
  }
  updateComment(comment, id) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.put('/api/comment/' + id, JSON.stringify(comment), options)
  }
  deleteComment(id) {
    return this.http.delete("/api/comment/" + id)
  }
  getLatestTrailers(){
    return this.http.get('/api/trailer')
  }
}
