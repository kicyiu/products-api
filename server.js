const express = require('express');
const app = express();
const json = express.json;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config').config;
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

//Importar variables de entorno locales
require('dotenv').config({ path: '.env' });


//Connect to database
mongoose.connect(`${config.dbUri}?authSource=admin`, { useNewUrlParser: true});

// middlewares
app.use(morgan('dev')); // para entender por consola lo que viene llegando
app.use(json()); // para entender datos en formato json

app.use(bodyParser.urlencoded({
    extended: true
}));

//Allow Access-Control-Allow-Origin
app.use(cors());

// routes
app.use('/api/products', productRoutes);


app.get('/', function(req, resp) {
    resp.send('<h1>Hellow World</h1>');
})



app.listen(config.PORT, function() {
    console.log('server started is on port: ', config.PORT);
});