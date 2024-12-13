/**
 * @description      : 
 * @author           : pcarm
 * @group            : 
 * @created          : 11/12/2024 - 11:05:57
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 11/12/2024
 * - Author          : pcarm
 * - Modification    : 
 **/

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');//importamos nuestra funcionalidad
const  colors = require('colors');

console.clear();

crearArchivo(argv.b,argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow))
.catch(err => console.log(err))