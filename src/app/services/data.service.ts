import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  load(key) {
    const _data = localStorage.getItem(key);
    return (_data) ? JSON.parse(_data) : null;
  }

  save(key, dados) {
    localStorage.setItem(key, JSON.stringify(dados));
  }
}
