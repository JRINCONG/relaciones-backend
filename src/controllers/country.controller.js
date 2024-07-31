const catchError = require('../utils/catchError');
const Country = require('../models/Country');


const getAll = catchError(async(req, res) => {
    
    const result= await Country.findAll()
    return res.json(result)

});


const Create = catchError(async(req, res) => {
    
    const result= await Country.create(req.body)
    return res.sendStatus(201).json(result)

});

const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const result= await Country.findByPk(id)
    if(!result) return res.sendStatus(404).json({
        id:id,
        data:'Countries not found'
    });
    return res.json(result)

});

const Destroy = catchError(async(req, res) => {
    const { id } = req.params
    const result= await Country.destroy({
        where:{id:id}
    })
    if(!result) return res.sendStatus(404).json({
        id:id,
        data:'Countries not found',
        msg:result,
    });
    return res.json(result)

});


const Update = catchError(async(req, res) => {
    const { id } = req.params
    const result= await Country.update(req.body,{
        where:{id:id}
    })
    if(result[0] === 0) return res.sendStatus(304).json({
        id:id,
        data:'Countries not Modified',
        msg:result,
    });
    
    return res.json(result)

});

module.exports={
    getAll,
    Create,
    getOne,
    Destroy,
    Update
}