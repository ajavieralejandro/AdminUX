import './curso.types';
import { CursoActionTypes } from './curso.types';
import {insertarModulo} from './curso.utils';

//Estado inicial de un formulario al crearse
const INITIAL_STATE = {
    title :'',
    modal :'',
    duracion:'',
    descripcion:'',
    docente : null,
    modulos : [],
    modulo : null,
    moduloName : '',
    image : ''
};

const cursoReducer = (state = INITIAL_STATE ,action) => {
    
    switch(action.type){
        case CursoActionTypes.SET_TITLE : 
            return{
                ...state,
                title : action.payload
            }

        case CursoActionTypes.SET_MODAL: return{
            ...state,
            modal : action.payload
        }

        case CursoActionTypes.SET_DURACION: return{
            ...state,
            duracion : action.payload
        }

        case CursoActionTypes.SET_DESCRIPCION : return{
            ...state,
            descripcion : action.payload
        }

        case CursoActionTypes.INSERT_MODULO : 
        return {
            ...state,
            modulos : insertarModulo(action.payload,state.modulos),
            modulo : null,
            moduloName : ''
        }

        case CursoActionTypes.SET_IMAGE : 
        return {
            ...state,
            image : action.payload
            
        }

        case CursoActionTypes.SET_MODULO : 
        return {
            ...state,
            modulo : action.payload,
            moduloName : action.payload.modulo
        }        
        case CursoActionTypes.SET_CURRENT_MODULO_NAME :
        return {
            ...state,
            moduloName : action.payload
        }

        case CursoActionTypes.SET_DOCENTE : 
        return {
            ...state,
            docente : action.payload
        }

     
        
        default : return state;


    }


}

export default  cursoReducer;