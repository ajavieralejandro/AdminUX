import React from 'react'
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { getTitle, getModal, getDuracion, getDescripcion ,getModulos, getImage} from '../../redux/curso/curso.selectors';



const CourseContent3 = ({image,formTitle,modal,duracion,descripcion,modulos}) => {
    return(
        <div className="courseContent">
            <Typography variant="body2" color="textSecondary" component="div"><h2>Titulo : {formTitle}</h2></Typography>
            <img className="pic" src={image} alt="Avatar del curso" />
            <p>modalidad : {modal}</p>
            <p>duracion : {duracion}</p>
            <h3>Descripcion : </h3>
            <p>{descripcion}</p>
            <h3>Modulos : </h3>
            {modulos.map(modulo => <p>modulo {modulo.index} : {modulo.modulo}</p>)}
       
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    title : getTitle,
    image : getImage,
    modal : getModal,
    duracion : getDuracion,
    descripcion : getDescripcion,
    modulos : getModulos
})

export default connect(mapStateToProps)(CourseContent3);
