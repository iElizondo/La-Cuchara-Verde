import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  imagenes: String[]=[]
  constructor() { }

  ngOnInit() {
    this.imagenes.push("../../../assets/imagenes/Carrusel/ima1.jpg",
                      "../../../assets/imagenes/Carrusel/ima2.jpg",
                      "../../../assets/imagenes/Carrusel/ima3.jpg",
                      "../../../assets/imagenes/Carrusel/ima4.jpg");
  }

}
