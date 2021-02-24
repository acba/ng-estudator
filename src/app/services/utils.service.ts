import { Injectable, Inject } from '@angular/core';

import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import * as utc from 'dayjs/plugin/utc'
import * as customParse from 'dayjs/plugin/customParseFormat'

dayjs.locale('pt-br')
dayjs.extend(utc)
dayjs.extend(customParse)

import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class UtilsService {

  constructor(
    private deviceService: DeviceDetectorService
  ) {}

  isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  isDesktop(): boolean {
    return this.deviceService.isDesktop();
  }

  isTablet(): boolean {
    return this.deviceService.isTablet();
  }

  first(lista) {
    if (!lista) return null;
    return (lista.length) ? lista[0] : ((lista) ? lista : null);
  }

  parseInt(entrada) {
    const resultado = Number(entrada);
    return (isNaN(resultado)) ? null : resultado;
  }

  getNomeDiaSemana(entrada) {
    const DIA_SEMANA = {
        '1': 'Segunda Feira',
        '2': 'Terça Feira'  ,
        '3': 'Quarta Feira' ,
        '4': 'Quinta Feira' ,
        '5': 'Sexta Feira'  ,
        '6': 'Sábado' ,
        '7': 'Domingo',
        '-1': 'Default'
    }

    return (entrada in DIA_SEMANA) ? DIA_SEMANA[entrada]: 'Default';
  }

  parseDiaSemana(entrada) {
    const NOME_DIA_SEMANA = {
        'segunda': 1,
        'terça': 2,
        'quarta': 3,
        'quinta': 4,
        'sexta': 5,
        'sábado': 6,
        'domingo': 7,
        'default': -1,
    }

    return (entrada in NOME_DIA_SEMANA) ? NOME_DIA_SEMANA[entrada] : NOME_DIA_SEMANA['default'];
  }

  getDayJs() {
    return dayjs()
  }

  toLowerCase(x: string) {
    if (!x || typeof x !== 'string') { return null; }
    return x.toLowerCase();
  }

  toUpperCase(x: string) {
    if (!x || typeof x !== 'string') { return null; }
    return x.toUpperCase();
  }

  sort(dados: any[]) {
    return dados.sort();
  }

  sortNum(dados: any[]) {
    return dados.sort((a, b) => a - b);
  }

  removerAcentos(s){
    if (!s) return '';
    if (typeof s !== 'string') return s;

    const mapa={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","Ç":"C","ç":"c","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U"};
    return s.replace(/[\W\[\] ]/g,function(a){return mapa[a]||a})
  };

  unique(arr: any[]) {
    return [...new Set(arr)]
  }

  converteEmDinheiro(valor) {
    if (!valor) { return valor; }
    return parseFloat(valor).toLocaleString('pt-BR');
  }

  formataDado(dado: string, mask: string) {
    if (!dado) { return dado; }
    if (dado.length !== mask.replace(/[^#]/g, '').length) { return dado; }

    let i = 0,
    v = dado.toString();
    return mask.replace(/#/g, _ => v[i++]);
  }

  formataData(dado, template='DD/MM/YYYY') {
    if (!dado) { return dado; }

    let ret = dayjs(dado).utc().format(template);
    if (ret === 'Invalid Date') {
      const formatoPadraoData = 'DD/MM/YYYY';
      ret = dayjs(dado, formatoPadraoData).utc().format(template);
    }

    return ret;
  }
}
