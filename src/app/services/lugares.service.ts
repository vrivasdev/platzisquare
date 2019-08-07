import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class LugaresService {
    lugares: any = [
        { id: 1, plan: 'pagado', cercania  : 1, distancia: 1, active  : true, nombre : 'Florería la gardenia' },
        { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre : 'Donas la pasadita' },
        { id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active  : true, nombre : 'Sushi Naka' },
        { id: 4, plan: 'gratuito', cercania: 2, distancia: 10, active : false, nombre: 'Veterinaria huellas' },
        { id: 5, plan: 'pagado', cercania  : 3, distancia: 35, active : true, nombre : 'Hotel Avanti' },
        { id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Hotel Avanti' },
        { id: 7, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre : 'Hotel Super nova' },
    ];
    constructor(private afDB: AngularFireDatabase) {}
    public getLugares() {
        return this.lugares;
    }
    public buscarLugar(id) {
        return this.lugares.filter(lugar => lugar.id === parseInt(id, 10))[0] || null;
    }
    public guardarLugar(lugar) {
        this.afDB.database.ref('lugares/2').set(lugar);
    }
}
