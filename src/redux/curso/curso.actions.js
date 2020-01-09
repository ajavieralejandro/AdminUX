import './curso.types';
import { CursoActionTypes } from './curso.types';
export const setCursoTitle = title => {

    return({
    type :  CursoActionTypes.SET_TITLE,
    payload : title
    })

}

export const setCursoModal = modal => {
    return({
        type :  CursoActionTypes.SET_MODAL,
        payload : modal
        })
    

}

export const setDescripcion = descripcion => {
    return({
        type: CursoActionTypes.SET_DESCRIPCION,
        payload : descripcion
    })
}

export const setCursoDuracion = duracion => {
    return({
        type : CursoActionTypes.SET_DURACION,
        payload : duracion

    })
}

export const insertModulo = modulo => {
 
    return({
        type : CursoActionTypes.INSERT_MODULO,
        payload : modulo
    })
}

export const setImage = image => {
    return({
        type : CursoActionTypes.SET_IMAGE,
        payload : image
    })
}

export const setAlgo = algo =>{
    return({
        type : CursoActionTypes.SET_ALGO,
        payload : algo
    })
}

export const setCurrentModulo = modulo => {
    
    return({
        type : CursoActionTypes.SET_CURRENT_MODULO,
        payload : modulo
    })
    
}



