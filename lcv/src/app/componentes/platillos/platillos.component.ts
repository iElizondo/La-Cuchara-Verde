import { Component, OnInit } from '@angular/core';
import { Platillo } from 'src/app/clases/platillo/platillo';
import {} from 'src/app/servicio/datos.service';


import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatosService } from 'src/app/servicio/datos.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {

  listPlatillo: Platillo[]=[];
  selectPlatillos: Platillo[]=[];

  constructor(private router:ActivatedRoute, private datosService: DatosService) { }

  ngOnInit() {
    const idMenu = this.router.snapshot.params['id'];
    this.listPlatillo = this.datosService.getListPlatillo();
    for(let platillo of this.listPlatillo){
      if(platillo.idMenu == idMenu){
        this.selectPlatillos.push(platillo);
      }
    }
  }
  onPreInfo(plato:Platillo){
    this.datosService.patilloSelec = Object.assign({},plato);
  }

}
