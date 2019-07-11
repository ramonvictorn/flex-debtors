/**
 * @author Ramon Victor <ramonvictorn@gmail.com>
 */

//require packages
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')

const logger = require('./libs/logger.js');
const routes = require('./core/routes.js');
const db = require('./db.js');
const settings = require('./settings').settings;
const app = express();


// static files
app.use('/js', express.static(__dirname + '/web/public/js'));
app.use('/css', express.static(__dirname + '/web/public/css'));
app.use('/assets', express.static(__dirname + '/web/public/assets'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//sessions
app.set('trust proxy', 1) // trust first proxy


app.use(function (req, res, next) { 
    console.log('Request:', req.method, req.originalUrl);
    next();
});

//  Pageview setting
routes.init(app);

app.get('*', (req,res) =>{res.sendFile(path.resolve('./src/web/public/views/index.html'))});

db.initDb(
    () => {
        app.listen(process.env.PORT || settings.APP_PORT,(req,res)=>{
            logger.log(`Running on port ${process.env.PORT || settings.APP_PORT}`)
            }
        )
     }
)