const getDebitsModel = require('../models/getDebts.js');
module.exports = getDebts;
function getDebts(req,res){
    if(!verifyParams(req.query)){
        return res.status(400).send({error:'INVALID_PARAMS'})
    }
    let context = {
        idUser : parseInt(req.query.idUser),
    }

    getDebitsModel(context,(dataReturned)=>{
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
    if(isNaN(params.idUser)) return false;
    return true;
}