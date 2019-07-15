import { Component, OnInit } from '@angular/core';
import { CarpNavegacion } from 'src/app/clases/carp-navegacion'

import { Router } from '@angular/router'

@Component({
  selector: 'app-carp-navegacion',
  templateUrl: './carp-navegacion.component.html',
  styleUrls: ['./carp-navegacion.component.css']
})
export class CarpNavegacionComponent implements OnInit {
  carpNavegacion: CarpNavegacion[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.carpNavegacion.push(new CarpNavegacion("Menu","../../../assets/imagenes/Cartas-Mavegacion/menu-n.png"),
                           new CarpNavegacion("Blog","../../../assets/imagenes/Cartas-Mavegacion/blog-n.png"),
                           new CarpNavegacion("Nosotros","../../../assets/imagenes/Cartas-Mavegacion/nosotros-n.png"),
                           new CarpNavegacion("Contactenos","../../../assets/imagenes/Cartas-Mavegacion/contactenos-n.png")
                           );
  }

  navegacion(nav:String){
    switch(nav){
      case "Menu":
        this.router.navigateByUrl('menu');
      break;
      case "Blog":
        this.router.navigateByUrl('blog');
      break;
      case "Nosotros":
        this.router.navigateByUrl('nosotros');
      break;
      case "Contactenos":
        this.router.navigateByUrl('contactenos');
      break;
    }
  }

}
