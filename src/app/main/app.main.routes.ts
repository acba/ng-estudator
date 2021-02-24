import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMainComponent } from './app.main.component';
import { HomeComponent } from './home/home.component';
import { CicloComponent } from './apps/ciclo/ciclo.component';
import { DisciplinaComponent } from './apps/disciplina/disciplina.component';
import { AlocacaoComponent } from './apps/alocacao/alocacao.component';
import { PlanilhaComponent } from './apps/planilha/planilha.component';

const routes: Routes = [
  {
    path: '', component: AppMainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: 'home', component: HomeComponent },
      { path: 'disciplina', component: DisciplinaComponent },
      { path: 'ciclo', component: CicloComponent },
      { path: 'alocacao', component: AlocacaoComponent },
      { path: 'planilha', component: PlanilhaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMainRoutesModule { }
