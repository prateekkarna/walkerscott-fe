import { Component, Input, OnInit } from '@angular/core';
import { Category, IArticle, ICategory, ICategoryResponse, UpdateArticle } from '../../../models/IArticle';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ArticlesCommandService } from 'src/app/Services/articles-command.service';
import { CategoryQueryService } from 'src/app/Services/category-query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  @Input()
  article!: IArticle;
  categories!: ICategoryResponse;
  category!: ICategory[];
  editable : boolean = false;
  showError : boolean = false;
  error : string = ""

  categoryList = ["a", "b"];
  
  articleForm = new FormGroup({
    updatedTitle : new FormControl(),
    updatedCategory : new FormControl(),
    updatedDescription: new FormControl()
  })

  constructor(private _articlesCommandService : ArticlesCommandService,
     private _router:Router,
     private _categoryQueryService : CategoryQueryService){} 

  ngOnInit(): void {
    this._categoryQueryService.GetCategories().subscribe(
      {
        next :(response) => {
          if(response.isSuccess)
          {
            this.categories = response.data;
            this.category = this.categories.categories;
            this.showError = false;
          }
          else{
            this.showError = true;
          this.error = "An error occured."
          }
        }
      }
    )
    this.articleForm.get('updatedTitle')?.setValue(this.article.title)
    this.articleForm.get('updatedCategory')?.setValue(this.article.categoryName)
    this.articleForm.get('updatedDescription')?.setValue(this.article.description)
  }

  ShowEditable(){
    this.articleForm.get('updatedTitle')?.setValue(this.article.title)
    this.articleForm.get('updatedCategory')?.setValue(this.article.categoryName)
    this.articleForm.get('updatedDescription')?.setValue(this.article.description)
    this.editable = !this.editable;
  }

  Cancel(){
    this.editable = false;
  }

  Update(){
    console.log(this.articleForm.value);
    let articleToUpdate = new UpdateArticle();
    articleToUpdate.title = this.articleForm.value.updatedTitle;
    articleToUpdate.description = this.articleForm.value.updatedDescription;
    articleToUpdate.articleId = this.article.articleId;
    articleToUpdate.categoryId = this.article.categoryId;

    

    this._articlesCommandService.UpdateArticle(articleToUpdate).subscribe({
      next : (response) => {
        if(response.isSuccess){
          this.editable = !response.isSuccess;
          this.showError = false;
          window.location.reload();
        }
        else{
          this.showError = true;
          this.error = "An error occured."
        }
        
      },
      error : (err) => {
        this.showError = true;
      }
    })
    
    
  }

  Delete(){
    this._articlesCommandService.DeleteArticle(this.article.articleId).subscribe({
      next : (response) => {
        if(response.isSuccess){
          window.location.reload();
        }
      }
    })
  }

}
