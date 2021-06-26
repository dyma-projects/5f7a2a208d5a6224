import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  public result = 0;

  constructor() { }

  increment(operator): void {
    console.log(operator);
    if (operator === '+') {
      this.result += 1;
    } else {
      this.result -= 1;
    }
  }
}
