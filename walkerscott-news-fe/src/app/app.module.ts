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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    NewsFeedsComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ArticlesQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
