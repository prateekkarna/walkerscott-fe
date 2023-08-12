import { Component , OnInit } from '@angular/core';
import { ArticlesQueryService } from 'src/app/Services/articles-query.service';
import { IArticle, INewsResponse } from 'src/app/models/IArticle';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit{

  constructor(private articlesQueryService : ArticlesQueryService){}
  
  articlesResponse!: INewsResponse; 
  prevLink!: string;
  nextLink!: string;
  isEnabled!: boolean;
  articles! : IArticle[]
  noData : boolean = false;
  ngOnInit(): void {
    this.articlesQueryService.GetNewsByPage(1,1)
    .subscribe({
      next : (response) => {
        this.articlesResponse = response.data;
        this.articles = this.articlesResponse.articles;
        this.prevLink = this.articlesResponse.prevPageLink;
        this.nextLink = this.articlesResponse.nextPageLink;
      },
      error : (error) =>{
        this.noData = true;

      }
    })
  }

}
