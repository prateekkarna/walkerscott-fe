import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../../models/IArticle';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  @Input()
  article!: IArticle;

  editable : boolean = false;
  
  articleForm = new FormGroup({
    updatedTitle : new FormControl(),
    updatedDescription: new FormControl()
  })

  ngOnInit(): void {
    this.articleForm.get('updatedTitle')?.setValue(this.article.title)
    this.articleForm.get('updatedDescription')?.setValue(this.article.description)
  }

  ShowEditable(){
    this.articleForm.get('updatedTitle')?.setValue(this.article.title)
    this.articleForm.get('updatedDescription')?.setValue(this.article.description)
    this.editable = !this.editable;
  }

  Cancel(){
    this.editable = false;
  }

  Update(){
    console.log(this.articleForm.value);
  }

  Delete(){
    
  }

}
