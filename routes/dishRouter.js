const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dishes = require('../model/dishes');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
  .get((req, res, next)=>{
    Dishes.find().then((dishes)=>{
      res.status = 200;
      res.setHeader('Content-type', 'application/json');
      res.json(dishes);
    })
  })
  .post((req, res, next)=>{
    Dishes.create(req.body).then((dishes)=>{
      console.log("inster berhasil")
      res.status = 200;
      res.setHeader('Content-type', 'application/json');
      res.json(dishes);
    })
  })

module.exports = dishRouter