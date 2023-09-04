import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public nombre: string = 'iron man';
  public edad: number = 45;

  get capitalizeName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero(value: string): void {
    this.nombre = value;
  }

  changeEdad(value: number): void {
    this.edad = value;
  }
  reset(): void {
    this.nombre = 'iron man';
    this.edad = 45;
  }
}
