import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMainComponent } from './app.main.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: AppMainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: 'home', component: HomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMainRoutesModule { }
