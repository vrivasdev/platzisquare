import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { animate, trigger, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000)),
    ])
  ]
})
export class LugaresComponent {
  title: string = 'PlatziSquare';
  lugares = null;
  error: string = '';
  state = 'inicial';

  constructor(private lugaresService: LugaresService) {
    this.lugaresService.getLugares() // .valueChanges() => if it's used with database queries
                       .subscribe(lugares => {
                         this.lugares = Object.values(lugares);
                         this.state = 'final';
                        }, error => {
                          console.log(error);
                          this.error = 'Error:' + error.statusText;
                        });
  }
  animar() {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }
  animacionInicia(e) {
    console.log(e);
    console.log('Animacion Inicia');
  }
  animacionTermina(e) {
    console.log(e);
    console.log('Animacion Termina');
  }
}
