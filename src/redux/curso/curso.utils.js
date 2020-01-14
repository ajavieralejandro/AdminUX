export const insertarModulo = (toIns,modulos) => {
   
    let toR = modulos;
    if(modulos.find(modulo => modulo.id === toIns.id)){
          //El modulo que quiero insertar ya esta en el arreglo
          toR = modulos.filter(modulo => modulo.id !==toIns.id);
          toR = [...toR,toIns];
          toR = toR.sort(compare);

    }
    else
        toR = [...modulos,toIns];    
    return toR;
}

//agrega los modulos de acuerdo al indice...
function compare(a,b){
    if(a.index>b.index)
        return 1;
    else 
        return -1; 
}

