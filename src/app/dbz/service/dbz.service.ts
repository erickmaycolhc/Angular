import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Caracter } from '../interfaces/caracter.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public caracter: Caracter[] = [
    {
      id: uuid(),
      nombre: 'krilin',
      poder: 1000,
    },
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 9500,
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  addCaracter(caracter: Caracter): void {
    const newcaracter: Caracter = { id: uuid(), ...caracter };

    this.caracter.push(newcaracter);
  }

  // onDeleteCaracter(i: number): void {
  //   this.caracter.splice(i, 1);
  // }

  DeleteCaracterById(id: string): void {
    this.caracter = this.caracter.filter((caracter) => caracter.id !== id);
  }
}
