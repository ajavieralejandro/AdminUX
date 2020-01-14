import './docentes.types';
import { DocenteActionTypes } from './docentes.types';


export const setName = name => {
    return {
        type : DocenteActionTypes.SET_NAME,
        payload : name
    }
}

export const setSecond = second => {
    return{
        type : DocenteActionTypes.SET_SECOND,
        payload : second
    }
}

export const addCurso = curso => {
    return{
        type: DocenteActionTypes.ADD_CURSO,
        payload : curso
    }
}

export const setMail = mail => {
    return{
        type : DocenteActionTypes.SET_MAIL,
        payload : mail
    }
}