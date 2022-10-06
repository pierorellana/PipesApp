import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  constructor() { }
   
  nombre: string = "Pierre";
  genero: string = "masculino";

  array ={
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla' 
  }

  clientes: string[] = ['Pierre', 'Andrea', 'Pedro', 'Veronica', 'Luis', 'Mario'];

  mapaClientes = {
    '=0' : 'no tenemos usuarios esperando en el sitema.',
    '=1' : 'tenemos un usuario esperando en el sitema.',
    '=2' : 'tenemos dos usuarios esperando en el sitema.',
    'other' : 'tenemos # usuarios esperando en el sitema.'
  }

  cambiarPersona(){
    this.nombre = 'Andrea';
    this.genero = 'femenino';
  }

  borrarUsuario(){
    this.clientes.pop();
  }

  persona = {
    direccion: 'Guayaquil, Ecuador',
    edad: 19,
    nombre: 'Pierre',
    titulo: 'Desarrollador Front-end'
  }

  miObservable = interval(3000);
}
