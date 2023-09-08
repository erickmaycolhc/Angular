import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public caracterList: Caracter[] = [
    {
      nombre: 'Trunks',
      poder: 10,
    },
  ];
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCaracter(id?: string): void {
    if (!id) return;

    this.onDelete.emit(id);
  }
}
