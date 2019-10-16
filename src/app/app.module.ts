import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CrearComponent } from './crear/crear.component';
import { LoginComponent } from './login/login.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';

import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

import { LugaresService } from './services/lugares.service';
import { AutorizacionService } from './services/autorizacion.service';

import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { MyGuard } from './services/my-guard.service';

export const firebaseConfig = {
  apiKey           : 'AIzaSyDIh5Xvi3Uttw-KaEomPqMEtCTCpCeGglk',
  authDomain       : 'platzisquare-248923.firebaseapp.com',
  databaseURL      : 'https://platzisquare-248923.firebaseio.com',
  projectId        : 'platzisquare-248923',
  storageBucket    : '',
  messagingSenderId: '619450697948',
  appId            : '1    : 619450697948: web: 3bda0330ff5875c2'
};

const appRoutes: Routes = [
  {path: '', component       : LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent, canActivate: [MyGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LoginComponent,
    RegistroComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVd7-b7HyS2dWGKoKO0vKeGFOXpAEbtVU'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [LugaresService, AutorizacionService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
