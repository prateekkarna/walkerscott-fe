import { Routes } from '@angular/router';
import { CreateArticleComponent } from './Components/NewsFeedComponents/create-article/create-article.component';
import { HomeComponent } from './Components/NewsFeedComponents/home/home.component';
import { ErrorComponent } from './Components/CommonComponents/error/error.component';
 
 
export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateArticleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];