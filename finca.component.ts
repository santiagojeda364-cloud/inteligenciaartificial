import { Component } from '@angular/core';
import { FincaService } from '../services/finca.service';

@Component({
  selector: 'app-finca',
  templateUrl: './finca.component.html'
})
export class FincaComponent {

  finca = {
    nombre: '',
    propietario: '',
    ubicacion: '',
    telefono: '',
    num_animales: 0
  };

  constructor(private fincaService: FincaService) {}

  guardar() {
    this.fincaService.agregarFinca(this.finca);
    console.log("Finca registrada", this.finca);
  }
}
