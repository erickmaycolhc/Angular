import { Component, EventEmitter, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-add-caracter',
  templateUrl: './caracter.component.html',
  styleUrls: ['./caracter.component.css'],
})
export class CaracterComponent {
  @Output()
  public onNewCaracter: EventEmitter<Caracter> = new EventEmitter();

  public caracter: Caracter = {
    nombre: '',
    poder: 0,
  };

  emitCaracter(): void {
    console.log(this.caracter);

    if (this.caracter.nombre.length === 0) return;

    this.onNewCaracter.emit(this.caracter);

    this.caracter = { nombre: '', poder: 0 };
  }
}
