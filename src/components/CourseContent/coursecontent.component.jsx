import React,{useState} from 'react'
import {connect} from 'react-redux';
//Componentes
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import SelectLabel from '../Select/selectLabel.component';
import FormLabel from '../formLabel/formLabel.component';
import Grid from '@material-ui/core/Grid';
import UploadImage from "../upload-image/upload-image.component";

import {setCursoTitle,setCursoModal,setCursoDuracion,setDescripcion} from '../../redux/curso/curso.actions';
//Acciones




//Estilos
import './coursecontent.style.scss';



const CourseContent = ({formTitle,handleChange,currentCurso,setCursoTitle,setCursoModal,setCursoDuracion,setDescripcion}) => {
    const [cursoTitle, setCurso] = useState('');
    const [modal, setModal] = useState('');
    const [duracion,setDuracion] = useState('');

    //Esta linea debe ser refactorizada haciendo uso del estado global
    const handleTitle = (event) => {
        //Refactorizar esta linea equivale a actualizar redux on change siempre
        //tengo que fijarme cual es el desempeño de esto
        handleChange(event);
        setCurso(event.target.value);
    

    }

    const handleModal = (event) => {
        setModal(event.target.value);

    }

    const handleDuracion = (event) => {
        setDuracion(event.target.value);
    }

    const exitForm = () => {
        //update Redux State
        //console.log("Hola,estoy siendo invocado");
        setCursoTitle(cursoTitle);
    }

    const exitModal = () => {
        setCursoModal(modal);
    }

    const exitDuracion = () => {
        setCursoDuracion(duracion);
        
    }

    const fileSelectHandler = event => {
        console.log(event.target);
    }
    
    return(
        <div className="courseContent">
        {(formTitle)?
            <Typography variant="body2" color="textSecondary" component="div"><h2>Titulo : {formTitle}</h2></Typography>:
            <Typography variant="body2" color="textSecondary" component="div"><h2>Formulario de Cursos</h2></Typography>}
        <form className="form" noValidate autoComplete="off">
      

            <Container>

            <UploadImage route={require('../../../src/camera.svg')} />

                <FormLabel formValue={currentCurso.title} defValue={currentCurso.title} focusOut={exitForm} handleChange={handleTitle} label="Tìtulo del curso" />
                <FormLabel formValue={currentCurso.modal} focusOut={exitModal} handleChange={handleModal} label="Modalidad" />
                <FormLabel formValue={currentCurso.duracion} focusOut={exitDuracion} handleChange={handleDuracion} label="Duracion" />

                <SelectLabel title="Seleccione Docente" />

                <div className="WrapText">
                <TextField
                    defaultValue={currentCurso.descripcion}
                    onBlur={(event) =>{setDescripcion(event.target.value)} }
                    className="textForm"
                    id="filled-multiline-static"
                    placeholder="Descripcción"
                    multiline
                    rows="4"
                    rowsMax="8"
                    variant="outlined"
                />
                </div>

                <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                >

         
                
                </Grid>

                


            </Container>
          
        </form>
        </div>
    );

   
}



const mapStateToProps = state => ({
    currentCurso : state.curso
})

const mapDispatchToProps = dispatch =>({
    setCursoTitle: title => dispatch(setCursoTitle(title)),
    setCursoModal: modal => dispatch(setCursoModal(modal)),
    setCursoDuracion: duracion => dispatch(setCursoDuracion(duracion)),
    setDescripcion : descripcion => dispatch(setDescripcion(descripcion)),
    
    
})



export default connect(mapStateToProps,mapDispatchToProps)(CourseContent);