const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.listar)
            .then(texto => console.log(` ${texto}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.listar)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}