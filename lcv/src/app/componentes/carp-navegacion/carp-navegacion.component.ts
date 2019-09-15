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
    this.carpNavegacion = this.datosService.getListCarpNavegacion();
  }

  ngOnInit() {}

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
