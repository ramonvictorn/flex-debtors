const db = require('../../db.js')
module.exports = getDebts;
function getDebts(context,cb){
    let queryWhere = ``;
    let queryValues = [
        context.idUser,
    ];

    let queryString = `SELECT
            id_debtor  as "idDebtor",
            id_user as "idUser",
            reason,
            value,
            details,
            date_debtor as "dateDebtor",
            date_inserted as "dateInserted"
        FROM 
            debtors
        WHERE 
            id_user = $1;`;

    db.query(queryString,queryValues,(err,res)=>{   
        if(err){
            cb({error:'ERROR_ON_GET_DEBTS'})
        }else{
            cb({data:res.rows})
        }  
    })
}