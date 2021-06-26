import { EventEmitter, Component, Output, Input } from '@angular/core';
@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent {
  @Input() counter: number;
  @Output() incrementE: EventEmitter<string> = new EventEmitter();

  constructor() { }

  increment(plus: string): void {
    this.incrementE.emit(plus);
  }
}
