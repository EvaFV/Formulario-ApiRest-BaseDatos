

export class Usuario {

        _id?: number;
        nombre: string;
        apellido: string;
        edad: string;
        dni: number;
        cumple: Date;
        color: string;
        sexo: string;

    constructor(nombre:string,apellido: string,edad: string, dni: number,cumple: Date, color:string, sexo:string ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.cumple = cumple;
        this.color = color;
        this.sexo = sexo;
        
    }

}