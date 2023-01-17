export class persona{
    id?:number;
    nombre: string;
    apellido: string;
    descripcion:string
    img: string;


    constructor(nombre:string,apellido:string,descripcion :string ,img:string){
        this.nombre = nombre;
        this.apellido = nombre;
        this.descripcion = descripcion;
        this.img = img;
    }
}
