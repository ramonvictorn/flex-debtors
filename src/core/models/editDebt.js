const db = require('../../db.js')
module.exports = editDebt;
function editDebt(context,cb){
    let querySet = ``;
    let queryValues = [
        context.idDebtor,
    ];  
    if(context.value){
        queryValues.push(context.value)
        querySet += ` value = $${queryValues.length} `;
    }
    
    if(context.reason){
        queryValues.length > 1 ? querySet+= ` , `: '';
        queryValues.push(context.reason);
        querySet += `reason = $${queryValues.length} `;
    }

    if(context.dateDebtor){
        queryValues.length > 1 ? querySet+= ` , `: '';
        queryValues.push(context.dateDebtor)
        querySet += ` date_debtor = $${queryValues.length} `;
    }
    
    let queryString = `UPDATE debtors
        SET
            ${querySet}
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
            cb({error:'ERROR_ON_UPDATE_DEBT'})
        }else{
            cb({data:result.rows[0]})
        }  
    })
}