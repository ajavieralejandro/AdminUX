import React ,{useState} from 'react';
import {connect} from 'react-redux';
import FormLabel from '../formLabel/formLabel.component';
import {setName,setSecond,setMail} from "../../redux/docente/docente.actions";
import TextField from '@material-ui/core/TextField';
import UploadImage from "../upload-image/upload-image.component";
import Button from '@material-ui/core/Button';







import './docentescontent.style.scss';


const DocentesContent = ({setName,setSecond,setMail}) => {
    const [image, setimage] = useState(null);
    const [imageBool, setimageBool] = useState(false);
    const [name, setname] = useState('');
    const [second, setsecond] = useState('');
    const [mail, setmail] = useState('');

    const onChangeName = (event) => {
        setname(event.target.value);
    }

    const onChangeSecond = (event) => {
        setsecond(event.target.value);
    }

    const onBlurSecond = () => {
        setSecond(second);
    }

    const onBlurName = () => {
        setName(name);

    }

    const onBlurMail = () => {
        setMail(mail);
        
    }

    const onChangeMail =  (event) => {
        setmail(event.target.value);
    }

    const fileSelectHandler = event => {
       
        if(event.target.files[0]){
        //Si hay una anterior la elimino    
        if(imageBool)
            URL.revokeObjectURL(image);
        const toIns = URL.createObjectURL(event.target.files[0]);
        setimage(toIns);
        setimageBool(true);

        }
    }
    

    

    return(
    <div className="add-docente">
       
        <UploadImage route={require('../../../src/avatar.svg')} />
        <FormLabel label="Nombre" focusOut={onBlurName}  handleChange={onChangeName}  />
        <FormLabel label="Apellido" focusOut={onBlurSecond}  handleChange={onChangeSecond}  />
        <FormLabel label="mail" focusOut={onBlurMail}  handleChange={onChangeMail}  />

        <div className="WrapText">
        <TextField
            //defaultValue={currentCurso.descripcion}
            //onBlur={(event) =>{setDescripcion(event.target.value)} }
            className="textForm"
            id="filled-multiline-static"
            placeholder="bio"
            multiline
            rows="4"
            rowsMax="8"
            variant="outlined"
        />
        </div>
    


    </div>
    
)}

const mapDispatchToProps = dispatch =>({
    setName : name => dispatch(setName(name)),
    setSecond : name => dispatch(setSecond(name)),
    setMail : mail => dispatch(setMail(mail))
    
})

export default connect(null, mapDispatchToProps)(DocentesContent)
