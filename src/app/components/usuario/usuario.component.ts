import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(param => {
      console.log(param);
      console.log('Importando desde la ruta padre');
    });
  }

  ngOnInit() {
  }

}
