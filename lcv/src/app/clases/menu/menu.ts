export class Menu {
    categoria: String;
    nombre: String;
    precio: String;
    descripcion: String;
    imagen: String;
    constructor(categoria:String, nombre:String, precio: String, descripcion:String, imagen:String){
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
