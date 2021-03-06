import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { AsincronoComponent } from './components/asincrono/asincrono.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { SwichComponent } from './components/swich/swich.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { NavabarComponent } from './components/navabar/navabar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    AsincronoComponent,
    ResaltadoDirective,
    SwichComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    UsuarioNuevoComponent,
    NavabarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
