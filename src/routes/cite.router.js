const express = require('express');
const { getAll, Create, getOne, Destroy, Update } = require('../controllers/cite.controller');
const { put } = require('./country.router');



const CiteRouter= express.Router();

CiteRouter.route("/")
     .get(getAll)
     .post(Create)

CiteRouter.route("/:id")
          .get(getOne)
          .delete(Destroy)
          .put(Update)



module.exports=CiteRouter;
