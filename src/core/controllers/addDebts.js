const addDebitsModel = require('../models/addDebts.js');
module.exports = addDebts;
function addDebts(req,res){
    if(!verifyParams(req.body)){
        return res.status(400).send({error:'INVALID_PARAMS'})
    }
    let context = {
        idUser : req.body.idUser,
        value: req.body.value,
        reason: req.body.reason,
        details: {},
        dateDebtor:req.body.dateDebtor,
    }

    addDebitsModel(context,(dataReturned)=>{
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
    if(isNaN(params.idUser) || isNaN(params.value)) return false;
    if(typeof params.reason != 'string') return false;
    if(params.dateDebtor == undefined) return false;
    return true;
}