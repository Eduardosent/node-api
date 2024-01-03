console.log('hola')
function elevar(elevado,how){
    temparray = [];
    let dato = elevado;
    for(let i=0;i<(how-1);i++){
        temparray.push(elevado)
    }
    for(let k=0;k<(how-1);k++){
        dato *= temparray[k]
    }
    console.log(dato)
}
elevar(32,2)
function raiz(elevado){
    temparray = [];
    let dato;
    for(let k=0;k<elevado;k++){
        if(k*k==elevado){
            dato = k;
        }
    }
    console.log(`${dato} de funcion raiz`)
}
raiz(1024)
elevar(13,2)
raiz(169)