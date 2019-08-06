import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Florería la gardenia',
      descripcion: 'descripcion del negocio' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita',
      descripcion: 'descripcion del negocio' },
    { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Sushi Naka',
      descripcion: 'descripcion del negocio' },
    { id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active: false, nombre: 'Veterinaria huellas',
      descripcion: 'descripcion del negocio' },
    { id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel Avanti',
      descripcion: 'descripcion del negocio' },
    { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Hotel Avanti',
      descripcion: 'descripcion del negocio' },
  ];
  id         = null;
  lugar: any = {};

  constructor(private route: ActivatedRoute) {
    this.id    = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }
  buscarLugar() {
    return this.lugares.filter(lugar => lugar.id === parseInt(this.id))[0] || null;
  }
}
