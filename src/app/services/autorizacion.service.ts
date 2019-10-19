import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AutorizacionService {
    constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
        this.isLogged();
    }
    public facebookLogin(){
        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((result)=>{
                console.log('Success:', result);
                alert('Usuario logueado con facebook');
                this.router.navigate(['lugares']);
            })
            .catch((error)=>{
                console.log('Error:', error);
            })
    }
    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                alert('Usuario Logueado con exito');
                this.router.navigate(['lugares']);
            })
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
