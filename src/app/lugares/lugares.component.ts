import { Component } from '@angular/core';

@Component({
  selector   : 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title      = 'PlatziSquare';
  lugares    : any = [
    { plan: 'pagado',cercania   : 1, distancia: 1, active  : true, nombre : 'Florería la gardenia' },
    { plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre : 'Donas la pasadita' },
    { plan: 'gratuito', cercania: 2, distancia: 5, active  : true, nombre : 'Sushi Naka' },
    { plan: 'gratuito', cercania: 2, distancia: 10, active : false, nombre: 'Veterinaria huellas' },
    { plan: 'pagado', cercania  : 3, distancia: 35, active : true, nombre : 'Hotel Avanti' },
    { plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Hotel Avanti' },
  ];
  lat        : number = 4.6560716;
  lng        : number = -74.0595918;

  constructor() {
  }
}