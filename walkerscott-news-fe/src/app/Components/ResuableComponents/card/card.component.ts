import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../../../models/IArticle';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  @Input()
  article!: IArticle;

  ngOnInit(): void {
    
  }

}
