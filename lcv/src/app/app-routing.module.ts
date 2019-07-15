import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from 'src/app/componentes/inicio/inicio.component';
import { MenuComponent } from 'src/app/componentes/menu/menu.component';
import { PlatillosComponent } from 'src/app/componentes/platillos/platillos.component';
import { BlogComponent } from 'src/app/componentes/blog/blog.component';
import { NosotrosComponent } from 'src/app/componentes/nosotros/nosotros.component';
import { ContactenosComponent } from 'src/app/componentes/contactenos/contactenos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'platillos', component: PlatillosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
