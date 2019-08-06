import { Component } from '@angular/core';

@Component({
  selector   : 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title      = 'PlatziSquare';
  lugares: any = [
    { id: 1, plan: 'pagado',cercania   : 1, distancia: 1, active  : true, nombre : 'Florería la gardenia' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre : 'Donas la pasadita' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active  : true, nombre : 'Sushi Naka' },
    { id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active : false, nombre: 'Veterinaria huellas' },
    { id: 5, plan: 'pagado', cercania  : 3, distancia: 35, active : true, nombre : 'Hotel Avanti' },
    { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Hotel Avanti' },
  ];
  lat: number = 4.6560716;
  lng: number = -74.0595918;

  constructor() {
  }
}