import { Component, ViewChild } from '@angular/core';
import { Exercice2Component } from './exercice2/exercice2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild(Exercice2Component, {static: true}) public exercice2: Exercice2Component;
  // Je n'ai pas compris l'utilisation de viewchild dans ce contexte.
}
