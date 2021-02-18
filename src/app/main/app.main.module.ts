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

@NgModule({
  declarations: [
    AppMainComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppConfigComponent,
    HomeComponent,
  ],
  imports: [
    AppMainRoutesModule,
    AppSharedModule,
  ],
  providers: [
    MenuService
  ]
})
export class AppMainModule {}
