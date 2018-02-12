/*jshint node:true*/

'use strict';

let dataPath = '/../data/';
let _ = require('lodash');

import { send404, notFoundMiddleware } from './utils/notfound';  // use latest TS 1.5, inspired from ES6
import jsonfileservice = require('./utils/jsonfileservice');  
import express = require('express');

let router = express.Router();
router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/*', notFoundMiddleware);

module.exports = router;

//////////////

//EG TODO: find type for next argument
function getPeople(req: express.Request, res: express.Response, next: any) {
    try {
        var json = jsonfileservice.getJsonFromFile(`${dataPath}people.json`);
        
        if(json){
            res.status(200).send(json);
        }
        else{
            send404(req, res, 'File not found');
        }
        
    } catch (error) {
        send404(req, res, error.message);
    }
}

function getPerson(req: express.Request, res: express.Response, next: any) {

    try {
        var id = +req.params.id;

        var person = _.find(jsonfileservice.getJsonFromFile(`${dataPath}people.json`),  (item: any) => {
            return item.id == id;
        });
        
        if (person) {
            res.status(200).send(person);
        } else {
            send404(req, res, `Person  with id ${id} not found`);
        }
        
    } catch (error) {
        send404(req, res, error.message);
    }
}
