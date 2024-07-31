const catchError = require('../utils/catchError');
const Cite = require('../models/Cite');


const getAll = catchError(async(req, res) => {
    
    const result= await Cite.findAll()
    return res.json(result)

});

const Create = catchError(async(req, res) => {
    
    const result= await Cite.create(req.body)
    return res.sendStatus(201).json(result)

});


const getOne = catchError(async(req, res) => {
     const { id }= req.params
    const result= await Cite.findByPk(id)
    if(!result) return res.Status(404).json({
        msg:'cites not found',
    })
    return res.json(result)

});

const Destroy = catchError(async(req, res) => {
    const { id }= req.params
   const result= await Cite.destroy({where:{ id }})
   if(!result) return res.Status(304).json({
       msg:'cites delete sussefull',
   })
   return res.json(result)

});


const Update = catchError(async(req, res) => {
    const { id }= req.params
   const result= await Cite.update(req.body,{where:{ id }})
   if(result[0]=== 0) return res.Status(404).json({
       msg:'cites not Modified',
   })
   return res.json(result)

});
module.exports={
    getAll,
    Create,
    getOne,
    Destroy,
    Update

}