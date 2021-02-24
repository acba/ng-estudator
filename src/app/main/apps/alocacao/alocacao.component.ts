import {Component, OnChanges, OnInit} from '@angular/core';

import { AlocacaoService } from 'src/app/services/alocacao.service';
import { DataService } from 'src/app/services/data.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    templateUrl: './alocacao.component.html',
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
export class AlocacaoComponent implements OnInit, OnChanges {

    textoAlocacao: string;
    alocacao;

    diasSemana = [1, 2, 3, 4, 5, 6, 7]

    constructor(
        public utils: UtilsService,
        private data: DataService,
        private alocacaoService: AlocacaoService
    ) {}

    ngOnInit() {
        this.alocacao = this.alocacaoService.carregaAlocacao();
        console.log('this.alocacao', this.alocacao)
    }

    ngOnChanges() {
        // this.disciplinas
    }

    processaAlocacao() {
        const alocacao = this.alocacaoService.processaAlocacao(this.textoAlocacao);

        this.alocacaoService.salvaAlocacao(alocacao);
        this.alocacao = alocacao;
    }

    existeDiaSemana(diasemana) {
        return diasemana in this.alocacao;
    }
}
