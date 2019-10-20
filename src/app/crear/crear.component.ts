import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector   : 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar: any = {};
  id: any = null;
  results$: Observable<any>;
  private searchField: FormControl;

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private http: Http) {
    this.id = this.route.snapshot.params['id'];
    if(this.id !== 'new') {
      this.lugaresService.getLugar(this.id)
          .valueChanges()
          .subscribe(lugar => {
            this.lugar = lugar;
          });
    }
    const URL = 'https://maps.google.com/maps/api/geocode/json?key=AIzaSyC5Cd6Tiu3oqs69v1GDk5_aTCwOk8B8ZIM';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
                        .debounceTime(500)
                        .switchMap(query => this.http.get(`${URL}?address=${query}`))
                        .map(response => {
                          console.log(response.json());
                          return response.json();
                        })
                        .map(json => json.results);
  }
  guardarLugar() {
    const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion)
        .subscribe((result: any) => {
          this.lugar.lat = 4.6563044; // result.json().results[0].geometry.location.lat
          this.lugar.lng = -74.057352; // result.json().results[0].geometry.location.lng

          if (this.id !== 'new') {
            this.lugaresService.editarLugar(this.lugar);
            alert('Negocio editado con exito');
          }else {
            console.log('editar:', this.lugar);
            this.lugar.id = Date.now();
            this.lugaresService.guardarLugar(this.lugar);
            alert('Negocio guardado con exito');
          }
          this.lugar = {};
        });
  }
}
