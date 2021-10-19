

const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });
mongoose.set('runValidators', true);
const conectardb = async () => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1);  //Detener la app
    }
    
}





module.exports = conectardb