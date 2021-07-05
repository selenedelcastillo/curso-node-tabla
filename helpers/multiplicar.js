const fs = require('fs');
const color = require('colors');

const crearArchivo = async(base=5,hasta,listar) => {

    try{
        let salida = '';
        let consola = '';

        for(let i=1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${color.blue(base)} ${'x'.red} ${i} = ${base*i}\n`;
        }

        if(listar){
            console.log("===========================".bgRed)
            console.log("======".bgYellow, "Tabla del".bold,color.brightMagenta(base).bold,"======".bgYellow)
            console.log("===========================".bgRed)

            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        
        return `tabla-${base}.txt`;
    }
    catch(err){
        throw err;
    }
}


/*
    Código como promesa

    const crearArchivo = (base=5) => {

    return new Promise((resolve,reject) =>{
        
        let salida = '';

        console.log("===========================")
        console.log("======  Tabla del ",base)
        console.log("===========================")

        for(let i=1; i<11; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        console.log(salida)

        fs.writeFileSync(`tabla-${base}.txt`, salida)
        
        resolve(`tabla-${base}.txt`)
    })
}*/


module.exports = {
    crearArchivo
}