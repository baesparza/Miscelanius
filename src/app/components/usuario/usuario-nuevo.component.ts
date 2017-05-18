import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo Works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(param => {
      console.log(param);
      console.log('Importando desde la ruta hija');
    });
  }

  ngOnInit() {
  }

}
