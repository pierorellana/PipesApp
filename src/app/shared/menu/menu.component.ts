import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items : MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label:'Fechas y Textos',
            icon: 'pi pi-sort-amount-up',
            routerLink: 'comunes'
          },
          {
            label:'Numeros',
            icon: 'pi pi-sort-numeric-up',
            routerLink: 'numeros'
          },
          {
            label:'No Comunes',
            icon: 'pi pi-question-circle',
            routerLink: 'no-comunes'
          }]
        },
        {
          label: 'Pipes Personalizados',
          icon: 'pi pi-slack',
          routerLink: 'ordenar'
        }
    ];

  }

}
