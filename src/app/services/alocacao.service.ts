import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AlocacaoService {

  constructor(
      private utils: UtilsService,
      private data: DataService
  ) { }

  processaAlocacao(rawData) {
    return this.parseAlocacao(rawData);
  }

  salvaAlocacao(alocacao) {
    this.data.save('alocacao', alocacao);
  }

  carregaAlocacao() {
    return this.data.load('alocacao');
  }

  private parseAlocacao(conteudo) {
    let alocacao = {};
    let diasemana = '';
    let _conteudo = conteudo.split('\n');

    _conteudo.forEach((linha: string, idx: number) => {
        linha = linha.trim()

        if(linha.startsWith('-')) {
            diasemana = linha.replace('-', '').toLowerCase().trim();
            diasemana = this.utils.parseDiaSemana(diasemana)
            alocacao[diasemana] = []

        } else if (linha.length > 0) {
            let dado = linha.split('-');

            alocacao[diasemana] = alocacao[diasemana].concat({
                'superciclo': dado[0],
                'ciclo': dado[1]
            })
        }
    });

    return alocacao
  }


}
