import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css']
})
export class RecomendacaoListarComponent  {

  @Input() recomenda;

  constructor() { }



}
