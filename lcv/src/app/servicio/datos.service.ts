import { Injectable } from '@angular/core';
import { Platillo } from 'src/app/clases/platillo/platillo';
import { CarpNavegacion } from 'src/app/clases/carp-navegacion';
import { Menu } from 'src/app/clases/menu/menu';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  imagenes: String[]=[]
  carpNavegacion: CarpNavegacion[] = [];
  listMenu: Menu[]=[];listPlatillo: Platillo[]=[];
  public patilloSelec: Platillo= new Platillo(0,0,"","","","","");


  constructor() { }
  
  public getListCarpNavegacion(){
    this.carpNavegacion.push(new CarpNavegacion("Menu","../../../assets/imagenes/Cartas-Mavegacion/menu-n.png"),
                           new CarpNavegacion("Blog","../../../assets/imagenes/Cartas-Mavegacion/blog-n.png"),
                           new CarpNavegacion("Nosotros","../../../assets/imagenes/Cartas-Mavegacion/nosotros-n.png"),
                           new CarpNavegacion("Contactenos","../../../assets/imagenes/Cartas-Mavegacion/contactenos-n.png")
                           );
    return this.carpNavegacion;                      
  }
  public getListImagenes(){
    this.imagenes.push("../../../assets/imagenes/Carrusel/ima1.jpg",
                      "../../../assets/imagenes/Carrusel/ima2.jpg",
                      "../../../assets/imagenes/Carrusel/ima3.jpg",
                      "../../../assets/imagenes/Carrusel/ima4.jpg");
    return this.imagenes;                      
  }
  public getListMenu(){
    this.listMenu.push(new Menu(0,"Poke Bowl","../../../assets/imagenes/Menu/poke-bowl.jpg"),
                       new Menu(1,"Wrap","../../../assets/imagenes/Menu/wrap.jpg"),
                       new Menu(2,"Desayuno","../../../assets/imagenes/Menu/desayuno.jpg"),
                       new Menu(3,"Almuerzo Ejecutivo","../../../assets/imagenes/Menu/almuerzo.jpg"),
                       new Menu(4,"Promociones","../../../assets/imagenes/Menu/Promociones.jpg"),
                       new Menu(5,"Ensaladas","../../../assets/imagenes/Menu/ensaladas.jpg"),
                       new Menu(6,"Postres","../../../assets/imagenes/Menu/postres.jpg"),
                       new Menu(7,"Batidos","../../../assets/imagenes/Menu/batidos.jpg"));
    return this.listMenu;
  }
  public getListPlatillo(){
    this.listPlatillo.push(new Platillo(0,0,"Poke Bowl Salmon","../../../assets/imagenes/Platillo/Poke-Bowl-Salmon.jpg","₡3500","","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Salmon, con los más frescos vegetales a escoger."),
                           new Platillo(1,0,"Poke Bowl Atún","../../../assets/imagenes/Platillo/Poke-Bowl-Atun.jpg","₡3500","","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Atún, con los más frescos vegetales a escoger."));
    return this.listPlatillo;
  }
}
