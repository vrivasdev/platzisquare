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

  constructor(){
  }
}