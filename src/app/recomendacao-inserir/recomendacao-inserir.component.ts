import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent  {

  @Output() recomendacaoAdicionada = new EventEmitter();

  adicionar(recomendacao) {
    const reco = {
    recomendacao: recomendacao

    };
    this.recomendacaoAdicionada.emit(reco);
    }

  constructor() { }



}
