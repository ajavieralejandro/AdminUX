import React from 'react';
//Componentes
import TextField from '@material-ui/core/TextField';

//Estilos 
import './formLabel.style.scss';

//Acciones
//import {setCursoTitle} from '../../redux/curso/curso.actions';


const FormLabel = ({handleChange,label,focusOut,formValue}) => {
    
    return(
        <div className="form-label">
            {(focusOut)?
                <TextField  defaultValue={formValue}  onBlur={focusOut} onChange={(event)=>(handleChange(event))} className="textForm" label={label} />
                :<TextField onChange={(event)=>(handleChange(event))} className="textForm"  label={label} />
        }
        </div>
    );
}

export default FormLabel;