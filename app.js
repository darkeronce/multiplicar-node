const argv = require("./config/yargs").argv;

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case "listar":
        listarTabla(base, limite)
            .then((res) => console.log(`Archivo creado: ${res}`))
            .catch((err) => console.log(err));
        break;
    case "crear":
        crearArchivo(base, limite)
            .then((res) => console.log(`Archivo creado: ${res}`))
            .catch((err) => console.log(err));
        break;
    default:
        console.log("comando no reconocido");
}

//Para pasar el argumento en la consola se utiliza --algo=algo
// console.log(argv);

// let base = argv[2].split('=')[1];