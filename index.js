#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const log = console.log;

const webapp = chalk.hex(`#4F46E5`).bold;
const twitter = chalk.hex(`#1da1f2`).bold
const github = chalk.hex(`#f50`).bold

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

log(`
    ${chalk.bgRed.white.bold(' Hola soy Pancho! ʕ •ᴥ•ʔ ')}
    🤘🏼 𝕽𝖊 𝖈𝖆𝖕𝖔, 𝖓𝖔?
    
    ${chalk.italic(`
    Soy un dev de ᴀʀɢᴇɴᴛɪɴᴀ, muy copado con 𝗝𝗦 y todo lo que se puede hacer.
    Principalmente trabajo con 𝗩𝘂𝗲 + 𝗧𝗦, pero estoy aprendiendo 𝗡𝗼𝗱𝗲.
    `)}

    👾 ${webapp(' Webapp ')} ${chalk.dim(`https://panchoblanco.com`)}
    🦑 ${github(' Github ')} ${chalk.dim(`https://github.com/Arbust908`)}
    🐦 ${twitter(' Twitter ')} ${chalk.dim(`https://twitter.com/BlancoPancho`)}

    ǝʎq ǝʎq
`);
