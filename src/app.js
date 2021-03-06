require('dotenv').config();

const express = require('express');
const nunjucks = require('nunjucks');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

class App {
    constructor () {
        this.express = express();

        this.templateEngine();
        this.middlewares();
        this.database();
        this.routes();
    }

    templateEngine () {
        nunjucks.configure(path.resolve(__dirname, 'views'), {
            express: this.express,
            noCache: true, 

        });
    }
    
    middlewares () {
        this.express.use(express.static(path.resolve(__dirname, '..', 'public')));
        this.express.use(express.urlencoded({ extended: true }));
    }
    
    database () {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    
    routes () {
        this.express.use(routes);
    }
}

module.exports = new App().express;
