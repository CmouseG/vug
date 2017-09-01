#! /usr/bin/env node

var console = require('chalk-console')
var genFile = require('../lib/gens/gen-file')


var arguments = process.argv.splice(2);
var filepath = arguments[0];

if(filepath.indexOf("components")==-1){
    console.error("component file must in the components directory")

}else{

    genFile('../templates/file/tpl.vue', 'src/' + filepath + ".component.vue");

}



