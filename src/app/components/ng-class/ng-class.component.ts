import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent implements OnInit {

  alert =  'alert-danger';

  propiedades: object = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

}
