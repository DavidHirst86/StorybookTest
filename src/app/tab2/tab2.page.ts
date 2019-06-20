import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) { }


  public gotoHome() {
    this.router.navigateByUrl('/home'); //how to navigate in ionic 4! https://angularfirebase.com/lessons/ionic-4-routing-and-navigation-guide/
  }

}
