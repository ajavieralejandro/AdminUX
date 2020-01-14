import React, { useState } from 'react'
import {connect} from 'react-redux'
//Componentes
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import ModulosList from '../ModulosList/modulosList.component';

import {createStructuredSelector} from 'reselect';

//Estilos
import './coursecontent.style.scss';

//Estado redux
import {insertModulo,setCurrentModuloName} from '../../redux/curso/curso.actions';
import { cursoSelector, getCurrentModuloName,getCurrentModulo } from '../../redux/curso/curso.selectors';




const CourseContent2 = ({formTitle,title,insertModulo,currentCurso,setCurrentModuloName,modulo,currentModulo}) => {
   
    //Necesito crear una referencia para limpiar el campo en el caso de una nueva insercion
    const [cont, setcont] = useState(currentCurso.modulos.length+1);
    console.log("El modulo que me esta llegando es : ",modulo);


const handleClick = () => {
    if(modulo==="")
        alert("No puedo Insertar modulo vacio");
    else{
        let toIns;
        if(!currentModulo){
            //En el caso de que no se este modificando un modulo actual
            setcont(cont+1);
             toIns = {
                index : cont,
                id : 'm'+cont,
                modulo : modulo
            }

        }

        else {
            toIns = {
                index : currentModulo.index,
                id : currentModulo.id,
                modulo : modulo
            }

        }

        insertModulo(toIns);

       
        //falta la insercion en la base de datos
        

    }

}

const handleItemClick = (item) => {
    //Hay que guardar el modulo viejo para proseguir una vez 
    //que se termino de editar el viejo ...
    console.log("EL item que me estan mandando es : ");
    console.log(item);
    //setModulo(item.modulo);
    setcont(item.index);
}

const handleChange = (event) => {
    setCurrentModuloName(event.target.value);

}
   
   


    return(
        <div className="courseContent">
        {(formTitle)?
            <Typography variant="body2" color="textSecondary" component="div"><h2>Titulo : {formTitle}</h2></Typography>:
            <Typography variant="body2" color="textSecondary" component="div"><h2>Formulario de {title}</h2></Typography>}
        <form className="form" noValidate autoComplete="off">
      

            <Container>
      

            <Typography variant="body2" color="textSecondary" component="div"><h2>Modulo {currentModulo?currentModulo.index : cont}</h2></Typography>

                <div className="WrapText">
                <TextField
                    value={modulo}
                    className="textForm"
                    id="filled-multiline-static"
                    placeholder="Ingrese Modulo"
                    multiline
                    rows="4"
                    rowsMax="8"
                    variant="outlined"
                    onChange={handleChange}
                />
                <Grid
                className="addIcon"
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                >
                <Fab onClick={handleClick} color="primary" aria-label="add">
                <AddIcon />
              </Fab>
                
                </Grid>

                              
                {(currentCurso.modulos.length>0)?
                    <ModulosList handleItemClick={handleItemClick} />
                :null}
                 
          
              </div>

               

            </Container>
          
        </form>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentCurso : cursoSelector,
    modulo : getCurrentModuloName,
    currentModulo : getCurrentModulo
})

const mapDispatchToProps = dispatch =>({
    insertModulo : modulo => dispatch(insertModulo(modulo)),
    setCurrentModuloName: modulo => dispatch(setCurrentModuloName(modulo))
})

export default connect(mapStateToProps,mapDispatchToProps)(CourseContent2);