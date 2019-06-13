import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class CardComponent {
  @Input('title') title = "Hello";
  @Input('subtitle') subtitle = "world";
  @Input('content') content = 'This is a simple card element with some styling applied 😄';

  @Output() btnClicked = new EventEmitter<boolean>();

  constructor() { }

  handleBtnClick() {
    this.btnClicked.emit(true);
  }
}