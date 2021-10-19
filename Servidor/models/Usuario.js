
const mongoose = require('mongoose');

const UsuarioSchema =    mongoose.Schema({    
    

    nombre: {
        type: String,
        required  : [true,'Campo nombre requerido'],
        minlength : [3, 'Campo mínimo 3 caracteres'],
        maxlength : [20, 'Campo máximo 20 caracteres'],
        validate:{
            validator: function (v) {
                return /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(v);    
            },
            message: props => ` ${props.value} no es un nombre válido`
        },
       
    },
    apellido: {
        type: String,
        required: [true, 'Campo apellido requerido'],
        minlength : [3, 'Campo mínimo 3 caracteres'],
        maxlength: [20, 'Campo máximo 20 caracteres'],
        validate:{
            validator: function (v) {
                return /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(v);    
            },
            message: props => `\n\n ${props.value} no es un apellido válido\n\n`
        },
    },
    edad: {
        type: Number,
        required: [true, 'Campo edad requerido'],
        min: [0, 'Edad minima 0 años'],
        max: [125,'Edad maxima 125 años']
    },
    dni: {
        type: String,
        required: [true, 'Campo dni requerido'],
        minlength: [9, "Campo mínimo 9 caracteres"],
        maxlength: [9, 'Campo máximo 9 caracteres'],
        validate:{
            validator: function (v) {
                return /^\d{8}[a-zA-Z]$/.test(v);    
            },
            message: props => `\n\n\t${props.value} no es un DNI válido. \n\tIntroduzca 8 digitos y una letra a continuación. \n\tEje: 01234567l\n`
        },
    },
    cumple: {
        type: Date,
        required: [true, 'Campo fecha nacimiento requerido'],
    },
    color: {
        type: String,
        required: [true, 'Campo color favorito requerido'],
        minlength: [3, 'Campo mínimo 3 caracteres'],
        validate:{
            validator: function (v) {
                return /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(v);    
            },
            message: props => `\n\n ${props.value} no es un color válido\n\n`
        },
    },
    sexo: {
        type: String,
        required: [true, 'Campo sexo requerido'],
        minlength: [3, "Campo mínimo 3 caracteres"],
        enum:{
            values: [
                'Hombre',
                'Mujer',
                'Otro',
                'Noespecificado'],
            message: '\n\n\t{VALUE} no definido para sexo\n\n'
        } ,
    },
    fechaCreacion : {
        type: Date,
        default: Date.now()
    },
});
    




module.exports = mongoose.model  ( 'Usuario', UsuarioSchema)


