// Dependencias necesarias.
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser  = require('body-parser');
require('./database');

//Configurar puerto.

app.set('Port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origen: '*'}));

app.use('/Admin', require('./routes/Admin.routes'));

app.listen(app.get('Port'), () => {
    console.log(`Escuchando por el puerto ${app.get('Port')}`)
})