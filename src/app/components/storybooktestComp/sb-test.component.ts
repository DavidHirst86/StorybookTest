import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-test-comp',
  template: `
    <div>
    <h1> {{ interpolationContent}} </h1>
    <h2 [innerHtml]="h2viaPropertyBinding"></h2>
    <p>I learnt about this stuff from this resource <a href="{{ linktoSource }} ">{{ linkText }} </a>. This maybe unsafe but its just a proof of concept.</p>
    </div>
  `
})
export class StorybookTestComp implements OnInit {
  //interpolationContent: string = 'Hello world via Interpolation'; //Interpolation
  h2viaPropertyBinding: string = 'This content is inserted via property binding'; // property binding.
  linktoSource: string = 'https://www.codementor.io/adekunleoyaniyi/interpolation-vs-property-binding-in-angular2-eu1tzbyn4'
  linkText: string = 'Interpolation Vs Property Binding in Angular2 '


  @Input('interpolationContent') interpolationContent = "Hello world via Interpolation";


  constructor() { }

  ngOnInit() { }

}
