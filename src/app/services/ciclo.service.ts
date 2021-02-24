import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  constructor(
      private utils: UtilsService,
      private data: DataService
  ) { }

  processaCiclo(rawData) {
    return this.parseCiclos(rawData);
  }

  salvaCiclo(disciplinas) {
    this.data.save('ciclos', disciplinas);
  }

  carregaCiclo() {
    return this.data.load('ciclos');
  }

  private parseCiclos(conteudo) {
    let planejamento = {};
    let superciclo   = '';
    let ciclo        = '';
    let disciplina   = '';
    let _conteudo    = conteudo.split('\n');

    _conteudo.forEach((linha: string, idx: number) => {
        linha = linha.trim()

        if(linha.startsWith('-')) {
            superciclo = linha.replace('-', '');
            planejamento[superciclo] = {}

        } else if (linha.startsWith('##')) {
            disciplina = linha.replace('##', '');
            planejamento[superciclo][ciclo]['materias'] = planejamento[superciclo][ciclo]['materias'].concat(disciplina)

        } else if (linha.startsWith('#')) {
            ciclo = linha.replace('#', '')
            let contador = _conteudo[idx+1]

            const cnt = (this.utils.parseInt(contador)) ? this.utils.parseInt(contador) : 0;
            planejamento[superciclo][ciclo] = {
                'cnt': cnt,
                'materias': []
            }
        }
    });

    return planejamento;
  }
}
