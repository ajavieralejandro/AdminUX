import './curso.types';
import { CursoActionTypes } from './curso.types';

//Estado inicial de un formulario al crearse
const INITIAL_STATE = {
    title :'',
    modal :'',
    duracion:'',
    descripcion:'',
    modulos : [],
    modulo : null,
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
            modulos : [...state.modulos,action.payload]
        }

        case CursoActionTypes.SET_IMAGE : 
        return {
            ...state,
            image : action.payload
            
        }
        
        case CursoActionTypes.SET_CURRENT_MODULO :
        return {
            ...state,
            modulo : action.payload
        }

     
        
        default : return state;


    }


}

export default  cursoReducer;