import { Component, OnInit } from '@angular/core';
import { CarpNavegacion } from 'src/app/clases/carp-navegacion'
@Component({
  selector: 'app-carp-navegacion',
  templateUrl: './carp-navegacion.component.html',
  styleUrls: ['./carp-navegacion.component.css']
})
export class CarpNavegacionComponent implements OnInit {
  carpNavegacion: CarpNavegacion[] = [];
  constructor() { }

  ngOnInit() {
    this.carpNavegacion.push(new CarpNavegacion("Menu","../../../assets/imagenes/Cartas-Mavegacion/menu-n.png"),
                           new CarpNavegacion("Blog","../../../assets/imagenes/Cartas-Mavegacion/blog-n.png"),
                           new CarpNavegacion("Nosotros","../../../assets/imagenes/Cartas-Mavegacion/nosotros-n.png"),
                           new CarpNavegacion("Contactenos","../../../assets/imagenes/Cartas-Mavegacion/contactenos-n.png")
                           );
  }

}
