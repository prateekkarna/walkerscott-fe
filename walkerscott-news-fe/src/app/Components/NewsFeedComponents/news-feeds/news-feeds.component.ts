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
  currentPageNo : number = 1;
  perPageData : number = 5;
  prevDisabled : boolean = false;
  nextDisabled : boolean = false;

  ngOnInit(): void {
    let storedPage = sessionStorage.getItem('currentPage');
    let pageNo = storedPage == undefined || storedPage == null || storedPage == "0" ? 1 : storedPage;
    this.articlesQueryService.GetNewsByPage(+pageNo,this.perPageData)
    .subscribe({
      next : (response) => {
        this.articlesResponse = response.data;
        this.articles = this.articlesResponse.articles;
        this.prevLink = this.articlesResponse.prevPageLink;
        this.nextLink = this.articlesResponse.nextPageLink;
        sessionStorage.setItem('currentPage', pageNo.toString());
        this.currentPageNo = +pageNo;
        this.prevDisabled = response.data.prevPageLink == null ? true : false;
        this.nextDisabled = response.data.nextPageLink == null ? true : false;
      },
      error : (error) =>{
        this.noData = true;

      }
    })
  }

  GetNextNewsFeeds(){
    this.articlesQueryService.GetNewsByUrl(this.nextLink)
    .subscribe({
      next : (response) => {
        this.articlesResponse = response.data;
        this.articles = this.articlesResponse.articles;
        this.prevLink = this.articlesResponse.prevPageLink;
        this.nextLink = this.articlesResponse.nextPageLink;
        sessionStorage.setItem('currentPage', (this.currentPageNo + 1).toString());
        this.prevDisabled = response.data.prevPageLink == null ? true : false;
        this.nextDisabled = response.data.nextPageLink == null ? true : false;
      },
      error : (error) =>{
        this.noData = true;

      }
    })
  }

  GetPrevNewsFeeds(){
    this.articlesQueryService.GetNewsByUrl(this.prevLink)
    .subscribe({
      next : (response) => {
        this.articlesResponse = response.data;
        this.articles = this.articlesResponse.articles;
        this.prevLink = this.articlesResponse.prevPageLink;
        this.nextLink = this.articlesResponse.nextPageLink;
        sessionStorage.setItem('currentPage', (this.currentPageNo - 1).toString());
        this.prevDisabled = response.data.prevPageLink == null ? true : false;
        this.nextDisabled = response.data.nextPageLink == null ? true : false;
      },
      error : (error) =>{
        this.noData = true;

      }
    })
  }

}
