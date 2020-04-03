const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.white(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido')
}

//let base = 2;

// let argv2 = process.argv;
// console.log(argv.limite);
//let param = argv[2];
//let base = param.split('=')[1];