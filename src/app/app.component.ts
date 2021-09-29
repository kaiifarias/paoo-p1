import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recomendacao';

  reco = [
  ]

  onRecomendacaoAdicionada (evento){
    this.reco = [evento, ...this.reco]
  }

}
