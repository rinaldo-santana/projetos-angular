import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

  readonly dados = [
    ['janeiro', 68],
    ['fevereiro', 50],
    ['marco', 30],
    ['abril', 40],
    ['maio', 10],
    ['junho', 25],
  ];

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable( observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }

}
