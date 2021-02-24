import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMainRoutesModule } from './app.main.routes';
import { AppSharedModule } from '../shared/shared.module';

import {HomeComponent} from './home/home.component';

import {AppMainComponent} from './app.main.component';
import {AppMenuComponent} from '../shared/app.menu.component';
import {AppMenuitemComponent} from '../shared/app.menuitem.component';
import {AppTopBarComponent} from '../shared/app.topbar.component';
import {AppFooterComponent} from '../shared/app.footer.component';

// Application services
import {MenuService} from '../shared/app.menu.service';
import { AppConfigComponent } from '../shared/app.config.component';
import { CicloComponent } from './apps/ciclo/ciclo.component';
import { DisciplinaComponent } from './apps/disciplina/disciplina.component';
import { AlocacaoComponent } from './apps/alocacao/alocacao.component';
import { PlanilhaComponent } from './apps/planilha/planilha.component';

@NgModule({
  declarations: [
    HomeComponent,
    CicloComponent,
    DisciplinaComponent,
    AlocacaoComponent,
    PlanilhaComponent,

    AppMainComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppConfigComponent,
  ],
  imports: [
    AppSharedModule,
    AppMainRoutesModule,
  ],
  providers: [
    MenuService
  ]
})
export class AppMainModule {}
