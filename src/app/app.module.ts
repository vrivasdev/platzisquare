
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';

import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

const appRoutes: Routes = [
  {path: '', component       : LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVd7-b7HyS2dWGKoKO0vKeGFOXpAEbtVU'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
