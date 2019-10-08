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

  constructor(private router:ActivatedRoute, private datosService: DatosService) {}

  ngOnInit() {
    const idMenu = this.router.snapshot.params['id'];
    this.listPlatillo.push(new Platillo(0,0,"Poke Bowl Salmón","../../../assets/imagenes/Platillo/Poke-Bowl-Salmon.jpg","₡3900","","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Salmón, con los más frescos vegetales a escoger."),
                           new Platillo(1,0,"Poke Bowl Atún","../../../assets/imagenes/Platillo/Poke-Bowl-Atun.jpg","₡3900","","Una explosión de sabor, atrévete a probar nuestra deliciosa Poke Bowl de Atún, con los más frescos vegetales a escoger."),
                           new Platillo(2,1,"Wrap Salmón","../../../assets/imagenes/Platillo/Wrap-Salmon.jpg","₡2000","","El wrap de salmón se recomienda con lechuga, queso, y el aderezo de la casa."),
                           new Platillo(3,1,"Wrap Pollo o Pescado con Quinoa","../../../assets/imagenes/Platillo/Wrap-Pollo-Pescado-Quinoa.jpg","₡2000","","Este delicioso platillo se sirve con vegetales o ensalada al gustó y el delicioso aderezo de la casa."),
                           new Platillo(4,1,"Wrap Vegetariano","../../../assets/imagenes/Platillo/Wrap-Vegetarianos.jpg","₡1500","","A su gusto, puedes escoger los mas frescos vegetales de la barra fría, acompañados del incomparable aderezo de la casa."),
                           new Platillo(5,1,"Wrap Jamón de Pavo","../../../assets/imagenes/Platillo/Wrap-Jamon.jpg","₡1500","","Los ingredientes que se complementan en este platillo son lechuga, tomate, queso, cebolla morada y el delicioso aderezo de la casa."),
                           new Platillo(6,2,"Típico","../../../assets/imagenes/Platillo/Desayuno-Tipico.jpg","₡1000","","Nuestro desayuno tipo consiste en pinto, huevo y una rebanada de pan integral. El Café se vende por separado 500 colones la taza, con refill gratis."),
                           new Platillo(7,2,"Omelette","../../../assets/imagenes/Platillo/Desayuno-Omelette.jpg","₡1000","","Este nutritivo desayuno incluye tres ingredientes a escoger, cada ingrediente extra son 200 colones. El Café se vende por separado 500 colones la taza, con refill gratis."),
                           new Platillo(8,2,"Panqueque","../../../assets/imagenes/Platillo/Desayuno-Panqueques.jpg","₡1000","","Deliciosos panqueques para iniciar bien tu mañana. El Café se vende por separado 500 colones la taza, con refill gratis. Puedes acompañarlo con fruta de temporada."),
                           new Platillo(9,2,"Frutas","../../../assets/imagenes/Platillo/Desayuno-Frutas.jpg","₡1000","","Ensalada de futas, con furtas de temporada. El Café se vende por separado 500 colones la taza, con refill gratis."),
                           new Platillo(10,2,"Yogurt con Granola","../../../assets/imagenes/Platillo/Desayuno-Yogurt.jpg","₡1000","","Delicioso y nutritivo desayuno para iniciar bien tu mañana. El Café se vende por separado 500 colones la taza, con refill gratis."),
                           new Platillo(11,3,"Casado","../../../assets/imagenes/Platillo/Almuerzo-Casado.jpg","₡2000","","Arroz, frijoles, vegetales, ensalada, acompañados de pollo o pescado según tu elección. Incluye bebida."),
                           new Platillo(12,3,"Ensalada de Pasta con Pollo","../../../assets/imagenes/Platillo/Almuerzo-Ensalada-Pasta-Pollo.jpg","₡1800","","Delicioso platillo que se integra de pasta, tomate, pepino, aceitunas, hongos y pollo."),
                           new Platillo(14,4,"Ensaladas","../../../assets/imagenes/Platillo/Promocion-Ensaladas.jpeg","₡1500","","Ofrecemos ensaladas desde 1500 colones, según los ingredientes seleccionados de la barra fría."),
                           new Platillo(15,4,"Ceviche","../../../assets/imagenes/Platillo/Promocion-Ceviche.jpeg","₡2000","","Deliciosa explosión de sabor, atrévete a probar la receta única de la casa."),
                           new Platillo(12,7,"Acelerador Metabólico","../../../assets/imagenes/Platillo/Batido-Acelerador-Metabolico.jpg","₡1200","","Fantástica combinación de piña, miel, perejil y té verde."),
                           new Platillo(14,7,"Batido de Proteína","../../../assets/imagenes/Platillo/Batido-Proteina.jpg","₡1000","","Especial para complementar tu entrenamiento."),
                           new Platillo(15,7,"Batido de Avena","../../../assets/imagenes/Platillo/Batido-Avena.jpg","₡1200","","Avena, fruta de su elección y el endulzante de su preferencia."));
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
