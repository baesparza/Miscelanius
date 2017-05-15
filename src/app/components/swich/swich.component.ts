import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swich',
  templateUrl: './swich.component.html'
})
export class SwichComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  alerta: string = 'info';

  constructor() { }

  ngOnInit() {
  }

}
