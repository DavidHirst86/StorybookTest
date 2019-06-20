import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab4Page } from './tab4.page';
import { ProductAppPage } from '../productApp/product-app.page';
import { TopBarComponent } from '../productApp/top-bar/top-bar.component';
import { ProductListComponent } from '../productApp/product-list/product-list.component';
import { ProductAlertsComponent } from '../productApp/product-list/product-alerts/product-alerts.component';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab4Page, ProductAppPage, TopBarComponent, ProductListComponent, ProductAlertsComponent]
})
export class Tab4PageModule { }
