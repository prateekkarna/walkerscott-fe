import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {

  showCreateForm : boolean = false;

  articleForm = new FormGroup({
    newTitle : new FormControl(),
    newDescription: new FormControl()
  })

  Create(){
    this.showCreateForm = true;
  }

  Add(){

  }

  Cancel(){
    this.showCreateForm = false;
  }
}
