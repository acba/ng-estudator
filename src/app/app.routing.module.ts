import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', pathMatch: 'full', redirectTo: 'main'},
            {path: 'login', component: AppLoginComponent},
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {
                path: 'main',
                loadChildren: () => import('./main/app.main.module').then(m => m.AppMainModule),
            },
            {path: '**', redirectTo: '/notfound'},
        ],
            {scrollPositionRestoration: 'enabled'}
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
