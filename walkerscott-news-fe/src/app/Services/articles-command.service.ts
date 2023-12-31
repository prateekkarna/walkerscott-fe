import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IApiRespone, INewsResponse , IArticle, IUpdateArticle, ICreateArticle} from '../models/IArticle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesCommandService {

  constructor(private _httpClient : HttpClient ) { }

  UpdateArticle(article : IUpdateArticle) : Observable<IApiRespone> {
    return this._httpClient.put<IApiRespone>("https://localhost:7042/api/News/UpdateArticle" , article);
  }

  DeleteArticle(id : number) : Observable<IApiRespone> {
    return this._httpClient.delete<IApiRespone>("https://localhost:7042/api/News/DeleteArticle?id=" + id );
  }

  CreateArticle(article : ICreateArticle):Observable<IApiRespone>{
    return this._httpClient.post<IApiRespone>("https://localhost:7042/api/News/CreateArticle", article);
  }
}
