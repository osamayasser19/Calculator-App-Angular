import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButton } from './components/buttons/primary-button/primary-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('calculatorApp');

  numbers: string[] = [
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    '*',
    '0',
    '.',
    '/',
    '=',
  ];

  onClick(char: string, value: string) {
    if (char == '=') {
      return this.calcOperation(value);
    } else {
      console.log(value + char);
      return value + char;
    }
  }

  calcOperation(value: string) {
    return eval(value);
  }
}
