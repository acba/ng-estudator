import { Injectable } from '@angular/core';
import { AlocacaoService } from './alocacao.service';
import { CicloService } from './ciclo.service';

import { DataService } from './data.service';
import { DisciplinaService } from './disciplinas.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class PlanilhaService {

    disciplinas;
    ciclos;
    alocacao;

  constructor(
    private utils: UtilsService,
    private data: DataService,

    private $disciplina: DisciplinaService,
    private $alocacao: AlocacaoService,
    private $ciclo: CicloService,
  ) { }

  calculaPlanilha() {

    this.disciplinas = this.$disciplina.carregaDisciplinas();
    this.alocacao = this.$alocacao.carregaAlocacao();
    this.ciclos = this.$ciclo.carregaCiclo();

    let atual = this.utils.getDayJs();
    let planilha = {};

    while (this.utils.parseInt(atual.format('d')) < 6) {
        const diasemana = String(this.utils.parseInt(atual.format('d')) + 1);

        planilha[diasemana] = this.calculaDia(atual);
        atual = atual.add(1, 'day')
    }

    return {
        'planilha': planilha,
        'disciplinas': this.disciplinas,
        'ciclos': this.ciclos
    }
  }

  salvaPlanilha(planilha) {
    this.data.save('planilha', planilha);
  }

  carregaPlanilha() {
    return this.data.load('planilha');
  }

  private calculaDia(data) {
    const diasemana = String(this.utils.parseInt(data.format('d')) + 1);

    let planilha_dia = [];
    const alocacao_dia = (diasemana in this.alocacao) ? this.alocacao[diasemana] : this.alocacao['-1'];
    alocacao_dia.forEach(item => {
        // const ciclo = this.ciclos[item['superciclo']][item['ciclo']];
        const assunto = this.getAssunto(item);
        planilha_dia = planilha_dia.concat(assunto)
    });

    return planilha_dia;
  }

  private getAssunto(item) {
      const ciclo = this.ciclos[item['superciclo']][item['ciclo']];
      const materias = ciclo['materias'];
      const idx = ciclo['cnt'] % materias.length;
      const nome_materia = materias[idx];
      const materia = this.disciplinas[nome_materia];

      if (!materia) {
        return `A disciplina '${nome_materia}' presente no superciclo '${item['superciclo']}' e ciclo '${item['ciclo']}' não foi encontrada na lista de Disciplinas cadastradas`
      }

      ciclo['cnt'] += 1;
      ciclo['cnt'] %= materias.length;

      if (materia['assuntos'].length === 0) {
          return `${idx} - ${nome_materia}`;
      } else {
          const materia_contador = materia['cnt'];
          const assuntos = materia['assuntos'];
          const nome_assunto = assuntos[materia_contador % assuntos.length];

          materia['cnt'] += 1;
          materia['cnt'] %= assuntos.length;

          return `${idx} - ${nome_materia}: ${nome_assunto}`;
      }
  }
}
