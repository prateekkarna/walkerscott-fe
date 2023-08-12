import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IApiRespone, INewsResponse } from '../models/IArticle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesQueryService {

  constructor(private _httpClient : HttpClient ) { }
  
  GetNewsByPage(pageNo : number, perPage : number) : Observable<IApiRespone> {
      return this._httpClient
      .get<IApiRespone>("https://localhost:7042/api/News/GetNewsByPage?pageNo=" + pageNo + "&perPage=" + perPage);
      
  } 

  GetNewsByUrl(url : string) : Observable<IApiRespone> {
    return this._httpClient
    .get<IApiRespone>(url);
    
} 
}
