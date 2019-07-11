exports.init = init

//middlewares


//controllers
const getUsersController = require('./controllers/getUsers.js');
const getDebtsController = require('./controllers/getDebts.js');


function init(app){
    app.get('/ping', (req,res)=>{
        console.log('ping acessado' , contador)
        res.send('Ping' + Date.now())
    })
    
    app.get('/users' , getUsersController);
    app.get('/debts', getDebtsController);
}