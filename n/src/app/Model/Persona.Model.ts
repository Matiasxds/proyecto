export class persona{
    id?:number;
    nombre: String;
    apellido: String;
    img: String;


    constructor(nombre:String,apellido:String,img:String){
        this.nombre = nombre;
        this.apellido = nombre;
        this.img = img;
    }
}