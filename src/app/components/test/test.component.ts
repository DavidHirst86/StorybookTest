import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  //                    bindingPropertyName  - Whats bound eg a string
  @Input('h1Content') databindingh1Text = "Default text from TS";
  @Input('buttonText') buttonText = "Button text";
  @Input('cardText') cardText = "card default text ";
  @Input('htmlDynamic') HTMLInput = "default fallback"

  constructor() { }

  ngOnInit() { }

}
