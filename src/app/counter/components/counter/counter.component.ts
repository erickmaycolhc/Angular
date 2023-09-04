import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>counter:{{ counter }}</p>

    <button (click)="aumentarContadorBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="aumentarContadorBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  aumentarContadorBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
