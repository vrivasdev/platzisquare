import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector   : 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar: any = {};

  constructor(private lugaresService: LugaresService) {
  }
  guardarLugar() {
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion)
        .subscribe((result: any) => {
          console.log(result);
          this.lugar.lat = 4.6563044; // result.json().results[0].geometry.location.lat
          this.lugar.lng = -74.057352; // result.json().results[0].geometry.location.lng

          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          this.lugar = {};

          alert('Negocio guardado con exito');
        });
  }
}
