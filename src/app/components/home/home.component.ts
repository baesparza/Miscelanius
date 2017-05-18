import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>
      <hr>
      <p>
        This has not the same scope ass app-css
      </p>
      <app-css></app-css>
      <hr>
      <app-ng-class>
      </app-ng-class>
      <hr>
      <app-asincrono></app-asincrono>
      <hr>
      <p [appResaltado]="'blue'">Hola Mundo</p>
      <hr>
      <h2>ngSwitch</h2>
      <app-swich></app-swich>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
