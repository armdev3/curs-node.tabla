/**
 * @description      : 
 * @author           : pcarm
 * @group            : 
 * @created          : 11/12/2024 - 13:44:51
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 11/12/2024
 * - Author          : pcarm
 * - Modification    : 
 **/

const  colors = require('colors');
const fs = require('fs');
const crearArchivo = async (base = 5, listar = false, hasta =10) => {
 
     try {
        if(listar){

            console.log('==============================='.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('==============================='.green);
        }
      
    
     
        let salida='';
        let consola = '';
   

        for (let i = 1; i <= hasta; i++) {
         
    
            salida +=`${base} x ${i} = ${base * i} \n`;
            consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    
        }
    
             if(listar) console.log(salida);
           
            //con writeFilesync
            fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
            return`tabla-${ base }.txt creado`;

        
     } catch (error) {

        throw error;
        
     }


}

module.exports ={
    //es reduandante
    // crearArchivo: crearArchivo
    crearArchivo
}