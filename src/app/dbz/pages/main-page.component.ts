import { Component, OnInit } from '@angular/core';
import { Caracter } from '../interfaces/caracter.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get caracters(): Caracter[] {
    return [...this.dbzService.caracter];
  }

  onDeleteCaracter(id: string): void {
    this.dbzService.DeleteCaracterById(id);
  }

  onNewCaracter(caracter: Caracter) {
    this.dbzService.addCaracter(caracter);
  }
}
