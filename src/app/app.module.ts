import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieyearsComponent } from './movieyears/movieyears.component';
import { CommentComponent } from './comment/comment.component';
import { UsercommentsComponent } from './usercomments/usercomments.component';
import { NgStringPipesModule } from 'angular-pipes';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { NewsComponent } from './news/news.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { Page404Component } from './page404/page404.component';
import { TrailersComponent } from './trailers/trailers.component';
import { SafePipe } from './safe.pipe';
import { AmpersandPipe } from './ampersand.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    NavbarComponent,
    HomeComponent,
    MoviedetailComponent,
    MovielistComponent,
    MovieyearsComponent,
    CommentComponent,
    UsercommentsComponent,
    ScheduleComponent,
    RecordsComponent,
    NewsComponent,
    LatestnewsComponent,
    Page404Component,
    TrailersComponent,
    SafePipe,
    AmpersandPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgStringPipesModule,
    NgxPaginationModule,
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
