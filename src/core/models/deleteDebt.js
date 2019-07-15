const db = require('../../db.js')
module.exports = deleteDebt;
function deleteDebt(context,cb){
    let queryWhere = ``;
    let queryValues = [
        context.idDebtor,
        // context.idUser,
        // context.reason,
        // context.value,
        // context.details,
        // context.dateDebtor,
    ];  
    // extract(epoch from u.date_inserted)*1000 as "dateInserted
    let queryString = `DELETE FROM debtors
            WHERE
            id_debtor = $1
        RETURNING 
            id_debtor as "idDebtor",
            id_user as "idUser",
            reason,
            value,
            date_debtor as "dateDebtor";`;

    db.query(queryString,queryValues,(err,result)=>{   
        if(err){
            cb({error:'ERROR_ON_DELETE_DEBT'})
        }else{
            cb({data:result.rows[0]})
        }  
    })
}