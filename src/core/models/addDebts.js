const db = require('../../db.js')
module.exports = addDebts;
function addDebts(context,cb){
    let queryWhere = ``;
    let queryValues = [
        context.idUser,
        context.reason,
        context.value,
        context.details,
        context.dateDebtor,
    ];  
    
    let queryString = `INSERT INTO debtors
            (id_user,reason,value,details,date_debtor,date_inserted)
        VALUES
            ($1,$2,$3,$4,$5,now())
        RETURNING 
            id_user as "idUser",
            id_debtor as "idDebtor",
            reason,
            value,
            date_debtor as "dateDebtor";`;

    db.query(queryString,queryValues,(err,result)=>{   
        if(err){
            cb({error:'ERROR_ON_ADD_DEBTS'})
        }else{
            cb({data:result.rows[0]})
        }  
    })
}