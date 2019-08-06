import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {active: true, nombre: 'Florería la gardenia'},
    {active: true, nombre: 'Donas la pasadita'},
    {active: false, nombre: 'Sushi Naka'},
    {active: false, nombre: 'Veterinaria huellas'},
    {active: true, nombre: 'Hotel Avanti'},
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