import {createSelector} from 'reselect';

export const cursoSelector = (state) => state.curso;

export const getImage = createSelector(
    [cursoSelector],
    (curso) => curso.image
)

export const getModulos = createSelector(
    [cursoSelector],
    curso => curso.modulos
)

export const getModulo = id => {
    console.log("Desde el selector me esta llegando : ");
    console.log(id);
    const toR =  createSelector(
        [getModulos],
        modulo => modulo.id === id
    )
    console.log("Estoy retornando : ");
    console.log(toR);
    return toR;
}

export const getCurrentModulo = createSelector(
    [cursoSelector],
    curso => curso.modulo
)

