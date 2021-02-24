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
                label: 'Estudator', icon: 'pi pi-fw pi-star',
                items: [
                    {label: 'Ciclos', icon: 'pi pi-fw pi-id-card', routerLink: ['/main/ciclo']},
                    {label: 'Disciplinas', icon: 'pi pi-fw pi-id-card', routerLink: ['/main/disciplina']},
                    {label: 'Alocação', icon: 'pi pi-fw pi-id-card', routerLink: ['/main/alocacao']},
                    {label: 'Planilha', icon: 'pi pi-fw pi-id-card', routerLink: ['/main/planilha']},
                ]
            },
        ];
    }
}
