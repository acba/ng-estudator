import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {AppMainComponent} from '../main/app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(
        public app: AppComponent,
        public appMain: AppMainComponent
    ) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']
            },
            {
                label: 'Oh yes', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'], badge: 8,
                items: [
                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                ]
            },
        ];
    }
}
