import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IApiRespone, ICategoryApiRespone, INewsResponse } from '../models/IArticle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryQueryService {

  constructor(private _httpClient : HttpClient ) { }

  GetCategories() : Observable<ICategoryApiRespone> {
    return this._httpClient
    .get<ICategoryApiRespone>('https://localhost:7042/api/Category/GetCategories');
    
} 
}
