import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RooibosTeaPage } from './rooibos-tea.page';

const routes: Routes = [
  {
    path: '',
    component: RooibosTeaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RooibosTeaPage]
})
export class RooibosTeaPageModule {}
