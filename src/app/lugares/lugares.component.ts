import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title: string = 'PlatziSquare';
  lat: number = 4.6560716;
  lng: number = -74.0595918;
  lugares = null;

  constructor(private lugaresService: LugaresService) {
    this.lugaresService.getLugares()      
      .subscribe(lugares => {
        console.log(lugares);
        this.lugares = lugares;
      });
  }
}
