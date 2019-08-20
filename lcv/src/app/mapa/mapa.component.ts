import { Component,  } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent  {

  title: string = 'My first AGM project';
  lat: number = 9.358679;
  lng: number = -83.685806;
  zoom: number = 16;

}
