import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

    menu        = 'slim';
    layout      = 'default';
    inputStyle  = 'outlined';
    darkMenu    = true;
    ripple: boolean;

    constructor(
        private primengConfig: PrimeNGConfig
    ) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
