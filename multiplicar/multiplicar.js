// Requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.red);
    console.log(`  TABLA DEL ${base}  `.red);
    console.log('================'.red);

    for (let x = 0; x < limite; x++) {
        console.log(`${base} * ${x} = ${base * x}`);
    }
};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
            //console.log(data);
        }

        fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-del-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}