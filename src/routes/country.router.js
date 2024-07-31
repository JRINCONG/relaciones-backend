const { getAll, Create, getOne, Destroy, Update} = require('../controllers/country.controller');
const express = require('express');


const CountyRouter = express.Router();

CountyRouter.route("/")
             .get(getAll)
             .post(Create)


CountyRouter.route("/:id")
            .get(getOne)
            .delete(Destroy)
            .put(Update)

module.exports=CountyRouter