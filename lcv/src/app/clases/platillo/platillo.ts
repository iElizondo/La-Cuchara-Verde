export class Platillo {
    idPlatillo: number;
    idMenu: number;
    nombre: string;
    imagen:string;
    precio: string;
    calorias: string;
    descripcion: string;

    constructor(idPlatillo:number, idMenu:number, nombre:string, imagen:string, precio:string, calorias:string, descripcion:string){
        this.idPlatillo = idPlatillo;
        this.idMenu = idMenu;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.calorias = calorias;
        this.descripcion = descripcion;
    }
}
