/*jshint node:true*/
import fs = require('fs');
'use strict';

export function getJsonFromFile(fileName: string) {
    var json = readJsonFileSync(fileName);
    return json;

    function readJsonFileSync(filepath: string, encoding?: string) {

        filepath = __dirname + filepath;

        if (typeof (encoding) === 'undefined') {
            encoding = 'utf8';
        }
        var fileName = fs.readFileSync(filepath, encoding);
        return JSON.parse(fileName);
    }
}
