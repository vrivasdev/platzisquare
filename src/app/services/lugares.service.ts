import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LugaresService {
    API_ENDPOINT = 'https://platzisquare-248923.firebaseio.com';
    lugares: any = [
        { id: 1, plan: 'pagado', cercania  : 1, distancia: 1, active  : true, nombre : 'Florería la gardenia' },
        { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre : 'Donas la pasadita' },
        { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active  : true, nombre : 'Sushi Naka' },
        { id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active : false, nombre: 'Veterinaria huellas' },
        { id: 5, plan: 'pagado', cercania  : 3, distancia: 35, active : true, nombre : 'Hotel Avanti' },
        { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Hotel Avanti' },
        { id: 7, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre : 'Hotel Super nova' },
    ];
    constructor(private afDB: AngularFireDatabase, private http: HttpClient) {        }
    public getLugares() {
        return this.afDB.list('lugares/');
    }
    public buscarLugar(id) {
        return this.lugares.filter(lugar => lugar.id === parseInt(id, 10))[0] || null;
    }
    public guardarLugar(lugar) {
        // this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar,
                              {headers: headers}).subscribe();
    }
    public obtenerGeoData(direccion) {
        return this.http.get('https://maps.google.com/maps/api/geocode/json?key=AIzaSyDVd7-b7HyS2dWGKoKO0vKeGFOXpAEbtVU&address=' + direccion);
    }
    public getLugar(id) {
        return this.afDB.object('lugares/' + id);
    }
    public editarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }
}
