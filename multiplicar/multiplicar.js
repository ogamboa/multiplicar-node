//requires
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El campo ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El campo ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}_${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}_${limite}.txt`);
        });
    })
}

let listarTabla = (base, limite = 10) => {

    console.log('====='.green);
    console.log('=====');
    console.log('====='.red);
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El campo ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El campo ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        resolve(`${data}`);

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}