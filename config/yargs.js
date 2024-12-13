/**
 * @description      : 
 * @author           : pcarm
 * @group            : 
 * @created          : 12/12/2024 - 11:30:11
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 12/12/2024
 * - Author          : pcarm
 * - Modification    : 
 **/
// const argv = require('yargs').argv;
//esto se hace con option keys de yargs //https://yargs.js.org/docs/#api-reference-optionkey-opt
//mas check https://yargs.js.org/docs/#api-reference-checkfn-globaltrue
const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default:10,
        describe:'indica las veces a multiplicar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe:'Muestra la tabla de multiplicar'

    })
   
   

    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true;

    })

    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'El tope tiene que ser un numero';
        }
        return true;

    })

    .argv;

// console.log(process.argv);//argumento que nos devuelve la consola
// console.log( argv );

// console.log('base: yargs', argv.h);


//console.log(process.argv);
// const [,,arg3 = 'base=5']=process.argv;
// const [,base =5] = arg3.split('=');
// console.log(base);
// //const base =5 ;

module.exports = argv; //exportamos argv