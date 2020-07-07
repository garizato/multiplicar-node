const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${ colors.green(archivo) }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = 'a';

//console.log(argv);
//let argv2 = process.argv;
//console.log('Limite: ', argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//console.log(parametro);