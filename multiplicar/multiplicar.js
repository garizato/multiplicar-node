const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    console.log('==========================================='.blue);
    console.log(`====== tabla de multiplicar ${base} =======`.blue);
    console.log('==========================================='.blue);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index} \n`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise(
        (resolve, reject) => {

            if (!Number(base)) {
                reject('No es un número');
                return;
            }

            let data = '';
            for (let index = 1; index <= limite; index++) {
                data += `${base} * ${index} = ${base*index} \n`;
            }

            fs.writeFile(`tablas/tabla${base}-${limite}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla${base}-${limite}.txt`);
                }
            });
        }
    );
};

module.exports = { crearArchivo, listarTabla };