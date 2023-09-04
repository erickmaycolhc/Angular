import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public nameHeroes: string[] = [
    'Spiderman',
    'Hulk',
    'She Hulk',
    'Capitan',
    'Ironman',
  ];

  public delecHero?: string;
  removeLastHero(): void {
    this.delecHero = this.nameHeroes.pop();
  }
}
