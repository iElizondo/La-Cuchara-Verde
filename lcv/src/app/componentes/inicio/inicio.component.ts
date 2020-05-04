import { Component, OnInit } from '@angular/core';
import { Menu } from '../../clases/menu/menu';
  import { from } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  botonesMenu: String[] = [];
  titulo: String;
  platillosMenu: Menu[] = [];
  platillosMenuActual: Menu[] = [];
  constructor() { }

  ngOnInit() {
    this.botonesMenu.push("Wrap","Sándwich","Ensaladas","Poke-Bowl","Casados","Desayunos","Batidos");
    this.platillosMenu.push(new Menu("Wrap","Wrap Pollo","₡3200","La proteína de su elección acompañada de 5 ingredientes al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Pescado","₡3200","La proteína de su elección acompañada de 5 ingredientes al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Jamón","₡3200","La proteína de su elección acompañada de 5 ingredientes al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Rosbif","₡3200","La proteína de su elección acompañada de 5 ingredientes al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Bistec","₡3200","La proteína de su elección acompañada de 5 ingredientes al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Atún","₡5500","La proteína de su elección acompañada de 5 ingredientes al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Salmón","₡5500","La proteína de su elección acompañada de 5 ingredientes al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300.","../../../assets/imagenes/platillos/wrap.jpg"),                           
                            new Menu("Sándwich","Sándwich Pollo","₡3000","La proteína de su elección acompañada de 4 ingredientes al gusto de nuestra barra fría.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),
                            new Menu("Sándwich","Sándwich Pescado","₡3000","La proteína de su elección acompañada de 4 ingredientes al gusto de nuestra barra fría.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),
                            new Menu("Sándwich","Sándwich Jamón","₡3000","La proteína de su elección acompañada de 4 ingredientes al gusto de nuestra barra fría.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),
                            new Menu("Sándwich","Sándwich Rosbif","₡3000","La proteína de su elección acompañada de 4 ingredientes al gusto de nuestra barra fría.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),
                            new Menu("Sándwich","Sándwich Bistec","₡3000","La proteína de su elección acompañada de 4 ingredientes al gusto de nuestra barra fría.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),                 
                            new Menu("Ensaladas","Ensalada Salmón","₡6500","La proteína de su elección acompañada de los dies más frescos ingredientes de la barra fría. Ingrediente adicional ₡300","../../../assets/imagenes/platillos/ensaladaSalmon.jpg"),
                            new Menu("Ensaladas","Ensalada Atún","₡5500","La proteína de su elección acompañada de los dies más frescos ingredientes de la barra fría. Ingrediente adicional ₡300","../../../assets/imagenes/platillos/ensalada.jpeg"),
                            new Menu("Ensaladas","Ensalada Pescado","₡4000","La proteína de su elección acompañada de los dies más frescos ingredientes de la barra fría. Ingrediente adicional ₡300","../../../assets/imagenes/platillos/ensalada.jpeg"),
                            new Menu("Ensaladas","Ensalada Pollo","₡4000","La proteína de su elección acompañada de los dies más frescos ingredientes de la barra fría. Ingrediente adicional ₡300","../../../assets/imagenes/platillos/ensaladaPollo.jpeg"),
                            new Menu("Ensaladas","Ensalada Chuleta","₡4000","La proteína de su elección acompañada de los dies más frescos ingredientes de la barra fría. Ingrediente adicional ₡300","../../../assets/imagenes/platillos/ensalada.jpeg"),
                            new Menu("Ensaladas","Ensalada Bistec","₡4000","La proteína de su elección acompañada de los dies más frescos ingredientes de la barra fría. Ingrediente adicional ₡300","../../../assets/imagenes/platillos/ensalada.jpeg"),
                            new Menu("Poke-Bowl","Poke Bowl Salmón Marinado","₡5000","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Salmón, con los más frescos vegetales a escoger. Ingrediente adiocional ₡300.","../../../assets/imagenes/platillos/bowlSalmon.jpeg"),
                            new Menu("Poke-Bowl","Poke Bowl Atún Marinado","₡5000","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Atún, con los más frescos vegetales a escoger. Ingrediente adiocional ₡300.","../../../assets/imagenes/platillos/bowlAtun.jpeg"),
                            new Menu("Casados","Casado Pollo","₡2500","Arroz, frijoles, vegetales y ensalada. Incluye bebida.","../../../assets/imagenes/platillos/CasadoPescado.jpg"),
                            new Menu("Casados","Casado Pescado","₡2500","Arroz, frijoles, vegetales y ensalada. Incluye bebida.","../../../assets/imagenes/platillos/CasadoPescado.jpg"),
                            new Menu("Casados","Casado Bistec","₡2500","Arroz, frijoles, vegetales y ensalada. Incluye bebida.","../../../assets/imagenes/platillos/CasadoBistec.jpg"),
                            new Menu("Casados","Casado Chuleta","₡2500","Arroz, frijoles, vegetales y ensalada. Incluye bebida.","../../../assets/imagenes/platillos/CasadoChuleta.jpg"),
                            new Menu("Desayunos","Típico","₡1500","Nuestro desayuno típico consiste en pinto, huevo al gusto y una rebanada de pan integral. El Café se vende por separado 600 colones la taza, con refill gratis. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/desayunoPintoHuevo.jpg"),
                            new Menu("Desayunos","Omelette","₡1200","Este nutritivo desayuno incluye cuatro ingredientes a escoger, cada ingrediente extra son 300 colones. El Café se vende por separado 600 colones la taza, con refill gratis. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/desayunoOmelette.jpg"),
                            new Menu("Desayunos","Panqueque","₡1500","Deliciosos panqueques para iniciar bien tu mañana. El Café se vende por separado 600 colones la taza, con refill gratis. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/desayunoPanqueque.jpg"),
                            new Menu("Desayunos","Frutas","₡700","Ensalada de futas, con furtas de temporada. El Café se vende por separado 600 colones la taza, con refill gratis.","../../../assets/imagenes/platillos/desayunoFrutas.jpg"),
                            new Menu("Desayunos","Frutas con Yogurt y Granola","₡1200","Delicioso y nutritivo desayuno para iniciar bien tu mañana. El Café se vende por separado 600 colones la taza, con refill gratis.","../../../assets/imagenes/platillos/desayunoYogurt.jpg"),
                            new Menu("Desayunos","Pinto con Omelette","₡1700","Delicioso desayuno para iniciar bien tu mañana. El Café se vende por separado 600 colones la taza, con refill gratis. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/desayunoPintoOmelette.jpg"),
                            new Menu("Desayunos","Chorreadas","₡1500","Deliciosas chorreadas para iniciar bien tu mañana. El Café se vende por separado 600 colones la taza, con refill gratis. El empaque para llevar tiene un costo de ₡200.Extra de Natilla ₡200.","../../../assets/imagenes/platillos/Chorreada.jpeg"),
                            new Menu("Batidos","Batido en Agua","₡900","Solas o combinadas, elige de las frutas de temporada.","../../../assets/imagenes/platillos/batidoAgua.jpg"),
                            new Menu("Batidos","Batido en Leche","₡1100","Solas o combinadas, elige de las frutas de temporada.","../../../assets/imagenes/platillos/batidoLeche.jpg"));
                          this.titulo = "Poke Bowl";
                          this.platillosMenuActual.push(new Menu("Poke-Bowl","Poke Bowl Salmón Marinado","₡5000","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Salmón, con los más frescos vegetales a escoger. Ingrediente adiocional ₡300.","../../../assets/imagenes/platillos/bowlSalmon.jpeg"),
                                                        new Menu("Poke-Bowl","Poke Bowl Atún Marinado","₡5000","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Atún, con los más frescos vegetales a escoger. Ingrediente adiocional ₡300.","../../../assets/imagenes/platillos/bowlAtun.jpeg")
                          );
                          }

  setTitulo(titulo:string){
    this.titulo = titulo;
    this.platillosMenuActual = [];
    this.platillosMenu.forEach(platillo => {
      if(titulo == platillo.categoria){
        this.platillosMenuActual.push(platillo);
      }
    });
  }

}
