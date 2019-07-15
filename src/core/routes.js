exports.init = init

//middlewares


//controllers
const getUsersController = require('./controllers/getUsers.js');
const getDebtsController = require('./controllers/getDebts.js');
const addDebtsController = require('./controllers/addDebts.js');
const deleteDebtsController = require('./controllers/deleteDebt.js');
const editDebtController = require('./controllers/editDebt.js');
function init(app){
    app.get('/ping', (req,res)=>{
        console.log('ping acessado' , contador)
        res.send('Ping' + Date.now())
    })
    
    app.get('/users' , getUsersController);
    app.get('/debts', getDebtsController);
    app.post('/debts', addDebtsController);
    app.delete('/debts', deleteDebtsController);
    app.put('/debts', editDebtController);
}