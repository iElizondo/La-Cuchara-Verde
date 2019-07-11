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
    BNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
