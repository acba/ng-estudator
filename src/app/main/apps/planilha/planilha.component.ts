import {Component, OnChanges, OnInit} from '@angular/core';
import { CicloService } from 'src/app/services/ciclo.service';

import { DataService } from 'src/app/services/data.service';
import { DisciplinaService } from 'src/app/services/disciplinas.service';
import { PlanilhaService } from 'src/app/services/planilha.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    templateUrl: './planilha.component.html',
})
export class PlanilhaComponent implements OnInit, OnChanges {

    disciplinas;
    ciclos;
    planilha;

    constructor(
        private utils: UtilsService,
        private data: DataService,
        private $planilha: PlanilhaService,
        private $disciplina: DisciplinaService,
        private $ciclo: CicloService
    ) {}

    ngOnInit() {

    }

    ngOnChanges() {
        // this.disciplinas
    }

    processaPlanilha() {
        const {planilha, disciplinas, ciclos} = this.$planilha.calculaPlanilha();

        this.planilha = planilha;
        this.disciplinas = disciplinas;
        this.ciclos = ciclos;

        console.log(planilha)
        console.log(disciplinas)
        console.log(ciclos)
    }

    salvaPlanejamento() {
        this.$disciplina.salvaDisciplinas(this.disciplinas);
        this.$ciclo.salvaCiclo(this.ciclos)
    }
}
