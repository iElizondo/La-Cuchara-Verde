import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/clases/menu/menu';

import { Router } from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listMenu: Menu[]=[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.listMenu.push(new Menu(0,"Poke Bowl","../../../assets/imagenes/Menu/poke-bowl.jpg"),
                       new Menu(1,"Wrap","../../../assets/imagenes/Menu/wrap.jpg"),
                       new Menu(2,"Desayuno","../../../assets/imagenes/Menu/desayuno.jpg"),
                       new Menu(3,"Almuerzo Ejecutivo","../../../assets/imagenes/Menu/almuerzo.jpg"),
                       new Menu(4,"Promociones","../../../assets/imagenes/Menu/Promociones.jpg"),
                       new Menu(5,"Ensaladas","../../../assets/imagenes/Menu/ensaladas.jpg"),
                       new Menu(6,"Postres","../../../assets/imagenes/Menu/postres.jpg"),
                       new Menu(7,"Batidos","../../../assets/imagenes/Menu/batidos.jpg"));
  }
}
