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
    this.platillosMenu.push(new Menu("Wrap","Wrap Pollo","₡2700","La proteína de su elección acompañada de 5 vegetales al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300 y el empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Pescado","₡2700","La proteína de su elección acompañada de 5 vegetales al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300 y el empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Jamón","₡2700","La proteína de su elección acompañada de 5 vegetales al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300 y el empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Wrap","Wrap Rosbif","₡2700","La proteína de su elección acompañada de 5 vegetales al gusto de nuestra barra fría. Cada acompañamiento extra tiene un costo de ₡300 y el empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/wrap.jpg"),
                            new Menu("Sándwich","Sándwich Pollo","₡2500","La proteína de su elección acompañada de 4 vegetales al gusto de nuestra barra fría. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),
                            new Menu("Sándwich","Sándwich Pescado","₡2500","La proteína de su elección acompañada de 4 vegetales al gusto de nuestra barra fría. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),
                            new Menu("Sándwich","Sándwich Jamón","₡2500","La proteína de su elección acompañada de 4 vegetales al gusto de nuestra barra fría. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),
                            new Menu("Sándwich","Sándwich Rosbif","₡2500","La proteína de su elección acompañada de 4 vegetales al gusto de nuestra barra fría. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/SandwichRosbif.jpg"),
                            new Menu("Ensaladas","Ensaladas Salmón","₡3700","La proteína de su elección acompañada de los más frescos ingredientes de la barra fría. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/ensaladaPescado.jpg"),
                            new Menu("Ensaladas","Ensaladas Atún","₡3700","La proteína de su elección acompañada de los más frescos ingredientes de la barra fría. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/ensaladaPescado.jpg"),
                            new Menu("Ensaladas","Ensaladas Pescado","₡3300","La proteína de su elección acompañada de los más frescos ingredientes de la barra fría. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/ensaladaPescado.jpg"),
                            new Menu("Ensaladas","Ensaladas Pollo","₡3300","La proteína de su elección acompañada de los más frescos ingredientes de la barra fría. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/ensaladaPollo.jpg"),
                            new Menu("Poke-Bowl","Poke Bowl Salmón Marinado","₡3900","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Salmón, con los más frescos vegetales a escoger. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/bowlSalmon.jpg"),
                            new Menu("Poke-Bowl","Poke Bowl Atún Marinado","₡3900","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Atún, con los más frescos vegetales a escoger. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/bowlAtun.jpg"),
                            new Menu("Casados","Casado Pollo","₡2200","Arroz, frijoles, vegetales y ensalada. Incluye bebida. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/CasadoPescado.jpg"),
                            new Menu("Casados","Casado Pescado","₡2200","Arroz, frijoles, vegetales y ensalada. Incluye bebida. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/CasadoPescado.jpg"),
                            new Menu("Casados","Casado Bistec","₡2200","Arroz, frijoles, vegetales y ensalada. Incluye bebida. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/CasadoBistec.jpg"),
                            new Menu("Casados","Casado Chuleta","₡2200","Arroz, frijoles, vegetales y ensalada. Incluye bebida. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/CasadoChuleta.jpg"),
                            new Menu("Desayunos","Típico","₡1200","Nuestro desayuno tipo consiste en pinto, huevo y una rebanada de pan integral. El Café se vende por separado 600 colones la taza, con refill gratis. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/desayunoPintoHuevo.jpg"),
                            new Menu("Desayunos","Omelette","₡1200","Este nutritivo desayuno incluye tres ingredientes a escoger, cada ingrediente extra son 200 colones. El Café se vende por separado 600 colones la taza, con refill gratis. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/desayunoOmelette.jpg"),
                            new Menu("Desayunos","Panqueque","₡1200","Deliciosos panqueques para iniciar bien tu mañana. El Café se vende por separado 600 colones la taza, con refill gratis. Puedes acompañarlo con fruta de temporada. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/desayunoPanqueque.jpg"),
                            new Menu("Desayunos","Frutas","₡700","Ensalada de futas, con furtas de temporada. El Café se vende por separado 600 colones la taza, con refill gratis.","../../../assets/imagenes/platillos/desayunoFrutas.jpg"),
                            new Menu("Desayunos","Frutas con Yogurt y Granola","₡1200","Delicioso y nutritivo desayuno para iniciar bien tu mañana. El Café se vende por separado 600 colones la taza, con refill gratis.","../../../assets/imagenes/platillos/desayunoYogurt.jpg"),
                            new Menu("Desayunos","Pinto con Omelette","₡1700","Delicioso desayuno para iniciar bien tu mañana. El Café se vende por separado 600 colones la taza, con refill gratis. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/desayunoPintoOmelette.jpg"),
                            new Menu("Batidos","Batido en Agua","₡1000","Solas o combinadas, elige de las frutas de temporada.","../../../assets/imagenes/platillos/batidoAgua.jpg"),
                            new Menu("Batidos","Batido en Leche","₡1200","Solas o combinadas, elige de las frutas de temporada.","../../../assets/imagenes/platillos/batidoLeche.jpg"));
                          this.titulo = "Poke Bowl";
                          this.platillosMenuActual.push(new Menu("Poke-Bowl","Poke Bowl Salmón Marinado","₡3900","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Salmón, con los más frescos vegetales a escoger. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/bowlSalmon.jpg"),
                                                        new Menu("Poke-Bowl","Poke Bowl Atún Marinado","₡3900","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Atún, con los más frescos vegetales a escoger. El empaque para llevar tiene un costo de ₡200.","../../../assets/imagenes/platillos/bowlAtun.jpg")
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
