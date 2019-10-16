import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AutorizacionService {
    constructor(private angularFireAuth: AngularFireAuth) {
        this.isLogged();
    }
    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then(response => alert('Usuario Logueado con exito'))
            .catch(error => console.log('Error:', error));
    }

    public registro = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(response => alert('Usuario registrado con exito'))
            .catch(error => console.log('Error:', error));
    }
    public isLogged() {
        return this.angularFireAuth.authState;
    }
}
