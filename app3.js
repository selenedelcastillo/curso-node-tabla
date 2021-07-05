const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

//const [ , , arg3 = "base=5"] = process.argv;
//const [ , base = 5 ] = arg3.split('=');


console.clear();

//console.log(process.argv);
console.log(argv);

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,"creado"))
    .catch(err => console.log(err))
