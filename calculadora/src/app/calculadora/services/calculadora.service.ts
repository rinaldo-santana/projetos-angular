

import { Injectable } from '@angular/core';

/**
 * Classe responsavel pela operaçãoes matematica da calculadora.
 * 
 * @author Rinaldo Santana
 * @since 1.0.0
 */

@Injectable()
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Retorna o resultado da operacao matematica do valores passados como paramentros.
   * Suporta operações matemáticas de subtração, soma, multiplicação e divisão.
   * 
   * @param num1 number
   * @param num2 number 
   * @param operacao CONSTANTE string Operacao matemática a ser executada.
   * @return number resultado da operacao matematica.
   */
  calcular(num1: number, num2: number, operacao: string ): number {
    let resultado : number;

    switch(operacao){
      case CalculadoraService.SOMA: 
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO: 
        resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      default: resultado = 0;

    }
    
    return resultado;
  };

}
