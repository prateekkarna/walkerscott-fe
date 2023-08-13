import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ArticlesCommandService } from 'src/app/Services/articles-command.service';
import { CreateArticle } from 'src/app/models/IArticle';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit{

  showCreateForm : boolean = false;
  showError : boolean = false;
  error : string|null|undefined = ""

  articleForm = new FormGroup({
    newTitle : new FormControl(),
    newDescription: new FormControl()
  })

  constructor(private _articlesCommandService : ArticlesCommandService, private _router:Router){}
  ngOnInit(): void {
    this.articleForm.get('newTitle')?.setValidators([Validators.required, Validators.maxLength(50)])
    this.articleForm.get('newDescription')?.setValidators([Validators.required, Validators.maxLength(5000)])
  }

  Create(){
    this.showCreateForm = true;
  }

  Add(){
    if(!this.articleForm.valid){
      let error = this.articleForm.get('newTitle')?.errors;
      if (error) {
        Object.keys(error).forEach(keyError => {
          this.error += keyError;
        });
      }
      this.showError = true;
    }
    else{
      let articleToCreate = new CreateArticle();
    articleToCreate.categoryId = 1,
    articleToCreate.title = this.articleForm.value.newTitle;
    articleToCreate.description = this.articleForm.value.newDescription;

    this._articlesCommandService.CreateArticle(articleToCreate).subscribe({
      next : (response) => {
        if(response.isSuccess){
          this._router.navigateByUrl('home');
        }
        else{
          this.showError = true;
          this.error = "Some error occured"
        }
      },
      error : (err) => {
        this.showError = true;
          this.error = "Some error occured"
      }
    })
    }


  }

  Cancel(){
    this.showCreateForm = false;
  }
}
