import { Component, OnInit } from '@angular/core';
import { Platillo } from 'src/app/clases/platillo/platillo';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {

  listPlatillo: Platillo[]=[];
  selectPlatillos: Platillo[]=[];

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    const idMenu = this.router.snapshot.params['id'];
    this.listPlatillo.push(new Platillo(0,0,"Poke Bowl Salmon","../../../assets/imagenes/Platillo/Poke-Bowl-Salmon.jpg","₡3500","",""),
                           new Platillo(1,0,"Poke Bowl Atún","../../../assets/imagenes/Platillo/Poke-Bowl-Atun.jpg","₡3500","",""));
    for(let platillo of this.listPlatillo){
      if(platillo.idMenu == idMenu){
        this.selectPlatillos.push(platillo);
      }
    }
  }

}
