import {Component, OnChanges, OnInit} from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { DisciplinaService } from 'src/app/services/disciplinas.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    templateUrl: './disciplina.component.html',
    styles: [`
        .textarea {
            display: block;
            width: 100%;
            overflow: hidden;
            resize: both;
            min-height: 40px;
            line-height: 20px;
        }
    `]
})
export class DisciplinaComponent implements OnInit, OnChanges {

    textoDisciplinas: string;
    disciplinas;

    constructor(
        private utils: UtilsService,
        private data: DataService,
        private disciplina: DisciplinaService
    ) {}

    ngOnInit() {
        this.disciplinas = this.disciplina.carregaDisciplinas();
        console.log('this.disciplinas', this.disciplinas)
    }

    ngOnChanges() {
        // this.disciplinas
    }

    processaDisciplinas() {
        const disciplinas = this.disciplina.processaDisciplinas(this.textoDisciplinas);

        this.disciplina.salvaDisciplinas(disciplinas);
        this.disciplinas = disciplinas;
    }
}
