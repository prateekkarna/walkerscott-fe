import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/CommonComponents/navbar/navbar.component';
import { CardComponent } from './Components/ResuableComponents/card/card.component';
import { NewsFeedsComponent } from './Components/NewsFeedComponents/news-feeds/news-feeds.component';
import { ArticlesQueryService } from './Services/articles-query.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    NewsFeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticlesQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
