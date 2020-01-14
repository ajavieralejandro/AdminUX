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

export const getTitle = createSelector(
    [cursoSelector],
    curso => curso.title
)
export const getModal = createSelector(
    [cursoSelector],
    curso => curso.modal
)

export const getDuracion = createSelector(
    [cursoSelector],
    curso => curso.duracion
)

export const getDescripcion = createSelector(
    [cursoSelector],
    curso => curso.descripcion
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

export const getCurrentModuloName = createSelector(
    [cursoSelector],
    curso => curso.moduloName,
)



