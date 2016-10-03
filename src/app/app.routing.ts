import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemsComponent } from './item/items.component';
import { HomeComponent } from './home/home.component';
import { LabelComponent } from './label/label.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'label',
    component: LabelComponent
  },
  {
    path: 'label/:Id',
    component: LabelComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
