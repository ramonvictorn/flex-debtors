const db = require('../../db.js')
module.exports = addDebts;
function addDebts(context,cb){
    let queryWhere = ``;
    let queryValues = [
        context.idUser,
        context.reason,
        context.value,
        context.details,
        // context.dateDebtor,
    ];  
    // extract(epoch from u.date_inserted)*1000 as "dateInserted
    let queryString = `INSERT INTO debtors
            (id_user,reason,value,details,date_debtor,date_inserted)
        VALUES
            ($1,$2,$3,$4,now(),now());`;

    db.query(queryString,queryValues,(err,res)=>{   
        if(err){
            cb({error:'ERROR_ON_ADD_DEBTS'})
        }else{
            cb({data:res.rows[0]})
        }  
    })
}