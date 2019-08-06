import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {cercania: 1, distancia: 1, active: true, nombre: 'Florería la gardenia'},
    {cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
    {cercania: 2, distancia: 5, active: true, nombre: 'Sushi Naka'},
    {cercania: 2, distancia: 10, active: false, nombre: 'Veterinaria huellas'},
    {cercania: 3, distancia: 35, active: true, nombre: 'Hotel Avanti'},
    {cercania: 3, distancia: 120, active: false, nombre: 'Hotel Avanti'},
  ];
  personas:any = [
    {edad: 20, nombre: 'Victor Rivas'},
    {edad: 15, nombre: 'Yuli Perez'},
    {edad: 30, nombre: 'Manuelita Del Campo'},
    {edad: 16, nombre: 'Pepe Mujica'},
  ];
  lat:number = 4.6560716;
  lng:number = -74.0595918;

  constructor(){
  }
}