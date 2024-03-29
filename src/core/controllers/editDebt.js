const editDebtModel = require('../models/editDebt.js');
module.exports = editDebt;
function editDebt(req,res){
    if(!verifyParams(req.body)){
        return res.status(400).send({error:'INVALID_PARAMS'})
    }
    let context = {
        idDebtor: req.body.idDebtor,
        reason: req.body.reason,
        value: req.body.value,
        dateDebtor: req.body.dateDebtor,
    }

    editDebtModel(context,(dataReturned)=>{
        if(dataReturned.error){
            res.status(400).send({error:dataReturned.error})
        }else{
            res.status(200).send({data:dataReturned.data})
        }
    })
}

/**
 * @returns Returns false if params aren't correct
 * @param {object} params - Params to verify
 */
function verifyParams(params){
    if(isNaN(params.idDebtor)) return false;
    if(typeof params.reason != 'string' && params.value == undefined && params.dateDebtor == undefined) return false;
    return true;
}