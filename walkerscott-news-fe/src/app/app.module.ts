import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/CommonComponents/navbar/navbar.component';
import { CardComponent } from './Components/ResuableComponents/card/card.component';
import { NewsFeedsComponent } from './Components/NewsFeedComponents/news-feeds/news-feeds.component';
import { ArticlesQueryService } from './Services/articles-query.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateArticleComponent } from './Components/NewsFeedComponents/create-article/create-article.component';
import { HomeComponent } from './Components/NewsFeedComponents/home/home.component';
import { ErrorComponent } from './Components/CommonComponents/error/error.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    NewsFeedsComponent,
    CreateArticleComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)                
  ],
  providers: [ArticlesQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
