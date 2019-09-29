import { RecordsComponent } from './records/records.component';

import { MovieyearsComponent } from './movieyears/movieyears.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NewsComponent } from './news/news.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { Page404Component } from './page404/page404.component';
import { TrailersComponent } from './trailers/trailers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserhomeComponent, canActivate: [AuthGuard] },
  { path: 'movieyear/:year', component: MovieyearsComponent },
  { path: 'movieyear', redirectTo: 'movieyear/2018', pathMatch: 'full' },
  { path: 'movieyear/:year/:movie/:id', component: MovieyearsComponent, pathMatch: 'full' },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'latestnews', component: LatestnewsComponent },
  { path: 'latesttrailers',component:TrailersComponent},
  { path: '**', redirectTo: '404' },
  { path: '404', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
