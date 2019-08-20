import { Injectable } from '@angular/core';
import { Platillo } from 'src/app/clases/platillo/platillo';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  public patilloSelec: Platillo= new Platillo(0,0,"","","","","");
}
