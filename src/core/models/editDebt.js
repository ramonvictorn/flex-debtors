const db = require('../../db.js')
module.exports = editDebt;
function editDebt(context,cb){
    let querySet = ``;
    let queryValues = [
        context.idDebtor,
    ];  
    if(context.value){
        queryValues.push(context.value)
        queryValues = ` $${queryValues.length} `;
    }
    
    if(context.reason){
        queryValues.push(context.reason)
        queryValues = ` $${queryValues.length} `;
    }

    if(context.dateDebtor){
        queryValues.push(context.dateDebtor)
        queryValues = ` $${queryValues.length} `;
    }
    
    let queryString = `UPDATE debtors
        SET
            ${querySet}
        WHERE 
            id_debtor
            RETURNING 
            id_debtor as "idDebtor",
            id_user as "idUser",
            reason,
            value,
            date_debtor as "dateDebtor";`;

    db.query(queryString,queryValues,(err,result)=>{   
        if(err){
            cb({error:'ERROR_ON_UPDATE_DEBT'})
        }else{
            cb({data:result.rows[0]})
        }  
    })
}