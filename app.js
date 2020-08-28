const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


let comando = argv._[0];
switch(comando){

    case 'listar':
        listarTabla(argv.base, argv.limite)

    break;

    case 'crear':     
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e))
    break;

    default: 
        console.log('Comando no reconocido')

}
