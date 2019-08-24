import { Component, OnInit } from '@angular/core';
import { DatosService} from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  imagenes: String[]=[]
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    this.imagenes = this.datosService.getListImagenes();
  }

}
