const fs = require("fs");
const color = require("colors");

// const fs = require('express'); no es nativa (se instala)
// const fs = require('./archivo.js'); archivos que creamos en nuestro proyecto

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado(${base}) no es un numero`);
            return;
        }

        let data = "";

        for (let j = 1; j <= limite; j++) {
            console.log(`${base} * ${j} = ${base * j} \n`.green);
        }
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado(${base}) no es un numero`);
            return;
        }
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(
                    `El archivo tabla-${base}.txt ha sido creado con un limite de ${limite}`
                );
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};