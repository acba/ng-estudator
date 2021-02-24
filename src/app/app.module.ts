import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { MessageService } from 'primeng/api';

// Application Components
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';

import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';

import { DataService } from './services/data.service';
import { UtilsService } from './services/utils.service';
import { DisciplinaService } from './services/disciplinas.service';
import { CicloService } from './services/ciclo.service';
import { AlocacaoService } from './services/alocacao.service';
import { PlanilhaService } from './services/planilha.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,

        /**
         * 3rd parties modules
         */
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,

        /**
         * Rotas
         */
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,

        AppLoginComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent
    ],
    providers: [
        MessageService,
        UtilsService,
        DataService,
        DisciplinaService,
        CicloService,
        AlocacaoService,
        PlanilhaService,

        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
