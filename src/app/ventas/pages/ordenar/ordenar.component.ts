import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  constructor() { }

  enMayuscula: boolean = false;
  ordenarPor: string = '';
  
  heroes: Heroe[] =[
    {
      nombre: 'Iron Man',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Black Panter',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Capitan America',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Vision',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Doctor Strange',
      vuela: true,
      color: Color.azul
    }
  ];
  
  cambiar(){
    this.enMayuscula = !this.enMayuscula;;
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
  }
}
