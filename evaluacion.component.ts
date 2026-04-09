import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html'
})
export class EvaluacionComponent {

  evaluacion = {
    agua: '',
    alimentacion: '',
    espacio: ''
  };

  resultado = '';

  calcular() {
    let puntaje = 0;

    if (this.evaluacion.agua === 'Bueno') puntaje++;
    if (this.evaluacion.alimentacion === 'Bueno') puntaje++;
    if (this.evaluacion.espacio === 'Bueno') puntaje++;

    if (puntaje === 3) this.resultado = 'Excelente';
    else if (puntaje === 2) this.resultado = 'Alto';
    else if (puntaje === 1) this.resultado = 'Medio';
    else this.resultado = 'Bajo';
  }
}
