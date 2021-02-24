import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(
      private utils: UtilsService,
      private data: DataService
  ) { }

  processaDisciplinas(textoDisciplinas) {
    return this.parseDisciplinas(textoDisciplinas);
  }

  salvaDisciplinas(disciplinas) {
    this.data.save('disciplinas', disciplinas);
  }

  carregaDisciplinas() {
    return this.data.load('disciplinas');
  }

  private parseDisciplinas(conteudo) {
    let disciplinas = {};
    let disciplina = '';
    let _conteudo = conteudo.split('\n');

    _conteudo.forEach((linha: string, idx: number) => {
        linha = linha.trim()

        if(linha.startsWith('##')) {
            disciplina = linha.replace('##', '');
            let contador = _conteudo[idx+1];

            const cnt = (this.utils.parseInt(contador)) ? this.utils.parseInt(contador) : 0;
            disciplinas[disciplina] = {
                'cnt': cnt,
                'assuntos': []
            }
        } else if (linha.startsWith('=')) {

        } else if (this.utils.parseInt(linha) == null && linha.length != 0) {
            console.log('3', linha)
            disciplinas[disciplina]['assuntos'] = disciplinas[disciplina]['assuntos'].concat(linha)
        }
    });

    return disciplinas
  }


}
