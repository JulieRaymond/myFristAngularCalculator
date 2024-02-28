import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {
  name: string = "Ma première calculatrice";
  number1!: number;
  number2: number = 0;
  result: number = 0;

  generateRandomNumber1(): void {
    this.number1 = Math.floor(Math.random() * 10) + 1;
  }

  generateRandomNumber2(): void {
    this.number2 = Math.floor(Math.random() * 10) + 1;
  }

  addition(): void {
    this.result = this.number1 + this.number2;
  }

  soustraction(): void {
    this.result = this.number1 - this.number2;
  }

  multiplication(): void {
    this.result = this.number1 * this.number2;
  }

  division(): void {
    this.result = this.number1 / this.number2;
  }
}
