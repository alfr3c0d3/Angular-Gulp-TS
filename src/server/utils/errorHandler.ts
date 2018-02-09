/*jshint node:true*/

'use strict';

import express = require('express');

interface MyError extends Error {
    statusCode: number;
}

export function init(err: MyError, req: express.Request, res: express.Response, next: any) {
    var status = err.statusCode || 500;
    if (err.message) {
        res.send(status, err.message);
    } else {
        res.send(status, err);
    }
    next();
}

/* Our fall through error logger and errorHandler  */
export function logErrors(err: MyError, req: express.Request, res: express.Response, next: any) {
    var status = err.statusCode || 500;
    console.error(status + ' ' + (err.message ? err.message : err));
    if (err.stack) {
        console.error(err.stack);
    }
    next(err);
}
