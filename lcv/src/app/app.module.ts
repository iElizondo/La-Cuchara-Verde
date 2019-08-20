import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PlatillosComponent } from './componentes/platillos/platillos.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BNavegacionComponent } from './componentes/b-navegacion/b-navegacion.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CarpNavegacionComponent } from './componentes/carp-navegacion/carp-navegacion.component'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MapaComponent } from './mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    PlatillosComponent,
    BlogComponent,
    NosotrosComponent,
    ContactenosComponent,
    EncabezadoComponent,
    BNavegacionComponent,
    CarruselComponent,
    CarpNavegacionComponent,
    MapaComponent,
    PieDePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlGIIyd5tq6q6WZtks391GARKDavaMSZM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
