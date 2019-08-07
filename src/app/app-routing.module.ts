import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cuppuccino', loadChildren: './page/cuppuccino/cuppuccino.module#CuppuccinoPageModule' },
  { path: 'rooibos-tea', loadChildren: './page/rooibos-tea/rooibos-tea.module#RooibosTeaPageModule' },
  { path: 'coffee', loadChildren: './page/coffee/coffee.module#CoffeePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
