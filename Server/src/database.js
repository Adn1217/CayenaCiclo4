const mongoose = require('mongoose');
// URI = ('mongodb://localhost/CayenaPruebas-React'); // reemplazar esta línea por el query de conexión de mongo Atlas.
URI = ("mongodb+srv://Samuel:B2TOBXEDAEZRGTIR@cluster0.crlhw.mongodb.net/CayenaPruebas?retryWrites=true&w=majority");
// URI = ("mongodb+srv://Samuel:B2TOBXEDAEZRGTIR@cluster0.crlhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( db => console.log(`Conectado a la BD ${db.connection.name}`))
.catch( error => console.log( error ));

module.exports = mongoose;