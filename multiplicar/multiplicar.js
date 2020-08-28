const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) =>{
        let data = '';

        if( !Number(base) ){
            reject('No es un numero')
            return;
        }


        for(let i = 1; i <= 10; i++){
            data += `${base} * ${ i } = ${ base * i }\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject (err)
            else
                resolve(`tabla-${base} creada`.green);
        });
    })

}

let listarTabla = (base, limite = 10) => {

    console.log('======================'.green)
    console.log(`=====tabla de ${base}=======`.green)
    console.log('======================'.green)
    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${ i } = ${ base * i }`)
    }
}


module.exports ={ 
    crearArchivo,
    listarTabla
}


