import {Component} from '@angular/core';

import { CicloService } from 'src/app/services/ciclo.service';
import { DataService } from 'src/app/services/data.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    templateUrl: './ciclo.component.html'
})
export class CicloComponent {

    textoCiclos: string;
    ciclos;

    constructor(
        private utils: UtilsService,
        private data: DataService,
        private ciclo: CicloService
    ) {}

    ngOnInit() {
        this.ciclos = this.ciclo.carregaCiclo();
        console.log('this.ciclos', this.ciclos)
    }

    ngOnChanges() {
        // this.disciplinas
    }

    processaCiclos() {
        const ciclos = this.ciclo.processaCiclo(this.textoCiclos);

        this.ciclo.salvaCiclo(ciclos);
        this.ciclos = ciclos;
    }
}
