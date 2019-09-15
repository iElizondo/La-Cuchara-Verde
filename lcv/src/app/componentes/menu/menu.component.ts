import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/clases/menu/menu';
import { DatosService} from 'src/app/servicio/datos.service';

import { Router } from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listMenu: Menu[]=[];

  constructor(private router: Router, private datosService: DatosService) {
    this.listMenu = this.datosService.getListMenu();
   }

  ngOnInit() {}
}
