import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service'
import { Router } from '@angular/router'
import { from } from 'rxjs';

import { CarpNavegacion } from 'src/app/clases/carp-navegacion';

@Component({
  selector: 'app-carp-navegacion',
  templateUrl: './carp-navegacion.component.html',
  styleUrls: ['./carp-navegacion.component.css']
})
export class CarpNavegacionComponent implements OnInit {
  carpNavegacion: CarpNavegacion[] = [];

  constructor(private router: Router, private datosService: DatosService) { 
    
  }

  ngOnInit() {
    this.carpNavegacion.push(new CarpNavegacion("Bowls","../../../assets/imagenes/Menu/poke-bowl.jpg"),
                           new CarpNavegacion("Wrap","../../../assets/imagenes/Menu/wrap.jpg"),
                           new CarpNavegacion("Desayunos","../../../assets/imagenes/Menu/desayuno.jpg"),
                           new CarpNavegacion("Almuerzos","../../../assets/imagenes/Menu/almuerzo.jpg")
                           );
  }

  navegacion(nav:String){
    switch(nav){
      case "Bowls":
        this.router.navigateByUrl('platillos/0');
      break;
      case "Wrap":
        this.router.navigateByUrl('platillos/1');
      break;
      case "Desayunos":
        this.router.navigateByUrl('platillos/2');
      break;
      case "Almuerzos":
        this.router.navigateByUrl('platillos/3');
      break;
    }
  }

}
