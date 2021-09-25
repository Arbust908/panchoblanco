#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

welcome({
    title: pkgJSON.name,
    tagLine: 'npx panchoblanco',
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: '#F43F5E',
    color: '#ffffff',
    bold: true,
    clear: true,
});

console.log(`
    Hola soy Pancho!
    Re capo, no?
    https://panchoblanco.com
`);
