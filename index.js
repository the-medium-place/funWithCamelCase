const toCamelCase = require('./camelCase.js');
const inquirer = require('inquirer');
const camelCase = require('camelcase');

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter a string to be camelized: ',
        name: 'userStr'
    }
]).then(function(response){
    // console.log(response);
    console.log("handmade function:" + toCamelCase(response.userStr))
    console.log("npm package style:" + camelCase(response.userStr))


})



