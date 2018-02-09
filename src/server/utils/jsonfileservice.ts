/*jshint node:true*/
import fs = require('fs');
'use strict';

export function getJsonFromFile(fileName: string) {
    // var fs = require('fs');
    var json = getConfig(fileName);
    return json;

    function readJsonFileSync(filepath: string, encoding?: string) {
        if (typeof (encoding) === 'undefined') {
            encoding = 'utf8';
        }
        var fileName = fs.readFileSync(filepath, encoding);
        return JSON.parse(fileName);
    }

    function getConfig(fileName: string) {
        var filepath = __dirname + fileName;
        return readJsonFileSync(filepath);
    }
}
