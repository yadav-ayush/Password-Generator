#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require("clipboardy")
const createPassword = require('./utils/createPasssword')
const savePassword = require('./utils/savePassword')
program.version('1.0.0').description('Simple Password Generator')

program
.option('-l,--length <number>','length of password','8')
.option('-s,--save','save password to passwords.txt')
.option('-nn,--no-numbers','remove numbers')
.option('-ns,--no-symbols','remove symbols')
.parse()
 const {length , save , numbers,symbols} = program.opts()


 //Get generated password
 const generatedPsassword = createPassword(length,numbers,symbols)

//save to file
if(save){
    savePassword(generatedPsassword)
}

 //copy to clipboard
 clipboardy.writeSync(generatedPsassword)

 //output generated password
console.log(chalk.blue('Generated Password : ') + chalk.bold(generatedPsassword))
console.log(chalk.yellow('Password copied to Clipboard'));