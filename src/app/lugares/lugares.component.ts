import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title: string = 'PlatziSquare';
  lugares = null;

  constructor(private lugaresService: LugaresService) {
    this.lugaresService.getLugares() // .valueChanges() => if it's used with database queries
                       .subscribe(lugares => {
                         this.lugares = Object.values(lugares);
                        });
  }
}
