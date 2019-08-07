import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CuppuccinoPage } from './cuppuccino.page';

const routes: Routes = [
  {
    path: '',
    component: CuppuccinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CuppuccinoPage]
})
export class CuppuccinoPageModule {}
