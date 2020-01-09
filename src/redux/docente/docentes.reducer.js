import './docentes.types';
import { DocenteActionTypes } from './docentes.types';

const INITIAL_STATE = {
    name : '',
    second : '',
    cursos : [],
}

const docentesReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){

        

        case DocenteActionTypes.SET_NAME: return {
            ...state,
            name :action.payload
        }

        case DocenteActionTypes.SET_SECOND : return {
            ...state,
            second :action.payload
        }

        case DocenteActionTypes.ADD_CURSO : return {
            ...state,
            cursos : [...state.cursos,action.payload]
        }

        default : return state;

    }

}

export default docentesReducer;

