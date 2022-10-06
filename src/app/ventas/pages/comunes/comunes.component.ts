import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html'
})
export class ComunesComponent {
  
  nombreLower: string = 'pierre';
  nombreUpper: string = 'ANDREA';
  nombreCompletp: string = 'PiERRe OreLLanA';

  fecha: Date = new Date();

}
