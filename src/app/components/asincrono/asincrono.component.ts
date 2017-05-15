import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincrono',
  templateUrl: './asincrono.component.html'
})
export class AsincronoComponent implements OnInit {

  loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar () {

    this.loading = true;

    setTimeout( () => this.loading = false, 1000);

  }

}
