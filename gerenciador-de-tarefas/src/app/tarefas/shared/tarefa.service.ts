import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa) : void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id); 
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach( (pTarefa, pIndex, pTarefas) => {
      if (tarefa.id === pTarefa.id){
        pTarefas[pIndex] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void{
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter( tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach( (tarefa, index, array) => {
      if (tarefa.id === id) {
        array[index].concluida = !tarefa.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
