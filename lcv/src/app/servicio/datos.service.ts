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
    this.listPlatillo.push(new Platillo(0,0,"Poke Bowl Salmón","../../../assets/imagenes/Platillo/Poke-Bowl-Salmon.jpg","₡3500","","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Salmón, con los más frescos vegetales a escoger."),
                           new Platillo(1,0,"Poke Bowl Atún","../../../assets/imagenes/Platillo/Poke-Bowl-Atun.jpg","₡3500","","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Atún, con los más frescos vegetales a escoger."),
                           new Platillo(2,1,"Wrap Salmón","../../../assets/imagenes/Platillo/Wrap-Salmon.jpg","₡2000","","El wrap de salmón se recomienda con lechuga, queso, y el aderezo de la casa."),
                           new Platillo(3,1,"Wrap Pollo o Pescado con Quinoa","../../../assets/imagenes/Platillo/Wrap-Pollo-Pescado-Quinoa.jpg","₡2000","","Este delicioso platillo se sirve con vegetales o ensalada al gustó y el delicioso aderezo de la casa."),
                           new Platillo(4,1,"Wrap Vegetariano","../../../assets/imagenes/Platillo/Wrap-Vegetarianos.jpg","₡1500","","A su gusto, puedes escoger los mas frescos vegetales de la barra fría, acompañados del incomparable aderezo de la casa."),
                           new Platillo(5,1,"Wrap Jamón de Pavo","../../../assets/imagenes/Platillo/Wrap-Jamon.jpg","₡1500","","Los ingredientes que se complementan en este platillo son lechuga, tomate, queso, cebolla morada y el delicioso aderezo de la casa."),
                           new Platillo(6,2,"Típico","../../../assets/imagenes/Platillo/Desayuno-Tipico.jpg","₡1000","","Nuestro desayuno tipo consiste en pinto, huevos, natilla con una rebanada de pan integral. El Café se vende por separado 200 colones la taza."),
                           new Platillo(7,2,"Omelette","../../../assets/imagenes/Platillo/Desayuno-Omelette.jpg","₡1000","","Este nutritivo desayuno incluye tres ingredientes a escoger, cada ingrediente extra son 200 colones. El Café se vende por separado 200 colones la taza."),
                           new Platillo(8,2,"Panqueque","../../../assets/imagenes/Platillo/Desayuno-Panqueques.jpg","₡1000","","Deliciosos panqueques para iniciar bien tu mañana. El Café se vende por separado 200 colones la taza."),
                           new Platillo(9,2,"Frutas","../../../assets/imagenes/Platillo/Desayuno-Frutas.jpg","₡1000","","La ensalada de futas cuenta con 5 frutas de temporada. El Café se vende por separado 200 colones la taza."),
                           new Platillo(10,2,"Yogurt con Granola","../../../assets/imagenes/Platillo/Desayuno-Yogurt.jpg","₡1000","","Delicioso y nutritivo desayuno para iniciar bien tu mañana. El Café se vende por separado 200 colones la taza."),
                           new Platillo(11,3,"Casado","../../../assets/imagenes/Platillo/Almuerzo-Casado.jpg","₡2000","","Arroz, frijoles, vegetales, ensalada, acompañados de pollo o pescado según tu elección. Incluye bebida."),
                           new Platillo(12,3,"Ensalada de Pasta con Pollo","../../../assets/imagenes/Platillo/Almuerzo-Ensalada-Pasta-Pollo.jpg","₡1800","","Delicioso platillo que se integra de pasta, tomate, pepino, aceitunas, hongos y pollo."),
                           new Platillo(13,3,"Hamburguesa","../../../assets/imagenes/Platillo/Almuerzo-Hamburguesa.jpg","₡1800","","Única y fascinante hamburguesa de pan brioche, carne espacialmente seleccionada, queso, lechuga, tomate, cebolla caramelizada, acompañada de vegetales o ensalada."),
                           new Platillo(14,4,"Ensaladas","../../../assets/imagenes/Platillo/Promocion-Ensaladas.jpg","₡1500","","Ofrecemos ensaladas desde 1500 colones, según los ingredientes seleccionados de la barra fría."),
                           new Platillo(15,4,"Ceviche","../../../assets/imagenes/Platillo/Promocion-Ceviche.jpg","₡","",""),
                           new Platillo(16,5,"Cesar","../../../assets/imagenes/Platillo/Ensalada-Cesar.jpg","₡2000","","Clásica y deliciosa compuesta la lechuga romana, crotones, queso parmesano, aderezo cesar can proteína a escoger."),
                           new Platillo(17,5,"Capresse","../../../assets/imagenes/Platillo/Ensalada-Caprese.jpg","₡1800","","Única y fascinante hamburguesa de pan brioche, carne espacialmente seleccionada, queso, lechuga, tomate, cebolla caramelizada, acompañada de vegetales o ensalada."),
                           new Platillo(18,5,"Carpaccio","../../../assets/imagenes/Platillo/Ensalada-Carpaccio.jpg","₡1500","","Ofrecemos ensaladas desde 1500 colones, según los ingredientes seleccionados de la barra fría."),
                           new Platillo(19,5,"Ensalada de la Casa","../../../assets/imagenes/Platillo/Ensalada-Casa.jpg","₡","",""));
    return this.listPlatillo;
  }
}
