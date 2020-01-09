import {combineReducers} from 'redux';
import cursoReducer from './curso/curso.reducer';
import docentesReducer from './docente/docentes.reducer';

export default combineReducers({
    curso : cursoReducer,
    docente : docentesReducer
});