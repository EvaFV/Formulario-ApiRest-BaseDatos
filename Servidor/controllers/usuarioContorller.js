
const Usuario = require("../models/Usuario")

// CREAR USUARIOS PARA GUARDARLOS
exports.crearUsuario = async (req, res) => {
    
    try {
        let usuario;
        // Creamos el usuario    
        usuario = new Usuario (req.body);

        await usuario.save();
        res.send(usuario)
        console.log('Usuario creado y guardado')

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el usuario')
    }
}

// BUSCAR Y OBTENER USUARIOS
exports.obtenerUsuario = async (req, res ) => {

    try {
        
        const usuarios = await Usuario.find();
        res.json(usuarios)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener el usuario')
    }
}

  // ACTUALIZAR USUARIOS
exports.actualizarUsuario = async (req, res) => {

    try {
        const { nombre, apellido, edad, dni, cumple, color, sexo } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'El usuario no existe' });
        }

        usuario.nombre   = nombre;
        usuario.apellido = apellido;
        usuario.edad     = edad;
        usuario.dni      = dni;
        usuario.cumple   = cumple;
        usuario.color    = color;
        usuario.sexo     = sexo;
        
        // usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true, runValidators: true });
        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, { new: true, runValidators: true });
        
        res.json(usuario);
        console.log('Usuario actualizado y guardado')
     
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al actualizar el usuario')
    }

}

exports.obtenerUsuarios = async (req, res) => {

    try {
        
        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'El usuario no existe' });
        }
       
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al actualizar el usuario')
    }

}
exports.eliminarUsuario = async (req, res) => {

    try {
        
        let usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            res.status(404).json({ msg: 'El usuario no existe' });
        }

       await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({msg: '¡ Usuario eliminado correctamente !'});
         console.log('Usuario eliminado')
        

    } catch (error) {
        console.log(error);
        console.log('Error al actualizar el usuario')
        res.status(500).send('Error al actualizar el usuario')
    }

}