
import React, { useState , useEffect} from 'react';
import {connect} from 'react-redux';

//Componentes
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormStepper from '../FormStepper/formStepper.component';
import CourseContent from '../CourseContent/coursecontent.component';
import CourseContent2 from '../CourseContent/coursecontent2.component';
import Fade from '@material-ui/core/Fade';


//Estilos
import './courseform.style.scss';
import CourseContent3 from '../CourseContent/coursecontent3.component';


//Por ahora no estoy recibiendo nada
const CourseForm = (curso) => {

    const handleChange = (event) => {
        setFormTitle(event.target.value);
        
    }

   
    const [formTitle,setFormTitle] = useState("");
    const [checked, setchecked] = useState(true);
    const [checked2, setchecked2] = useState(false);
    const [checked3, setchecked3] = useState(false);

    //Vamos a ver si esto hace lo que quieremos que haga
    const handleNext = () => {
        console.log("Quiero ver desde donde estoy invocando esto :   ");
        console.log(curso);
        console.log(curso.curso)
        //Esto es importante para que salte el cartel de avanzar, deberia atajarlo acá y ver de no retornar nada
        if(curso.curso.title==="" || curso.curso.modal===""|| curso.curso.duracion===""){
            console.log("false");
            return false;
        }
        
        console.log("true");
        if(checked){
            setchecked(false);
        //Linea de refactorizacion
        setchecked2(true);

        }
        if(checked2){
            setchecked2(false);
        //Linea de refactorizacion
            setchecked3(true);
        }
        
       
        return true;
       
       
 
    }

    const handleBack = () => {
        //Esta linea deberia actualizarse en futuras refactorizaciones
        if(checked2){
            setchecked(true);
            setchecked2(false);
        }
        else if(checked3){
            setchecked2(true);
            setchecked3(false);
        }
       
    }        
   


 
    return(
        <div className="wrap-card">
        
            <Card className="cardForm">
                

            <CardContent>
                <Fade in={checked}>
                    <div>
                        {checked?<CourseContent formTitle={formTitle}   handleChange={handleChange} />:null}
                        
                    </div>
                </Fade>
                <Fade in={checked2}>
                    <div>
                        {checked2?<CourseContent2 formTitle={formTitle} />:null}
                    </div>
                </Fade>
                <Fade in={checked3}>
                    <div>
                        {checked3?<CourseContent3 formTitle={formTitle} />:null}
                    </div>
                </Fade>
                
                <FormStepper onNext={handleNext} onBack={handleBack} />

                
            </CardContent>




            </Card>


        </div>
    );
}

const mapStateToProps = state => ({
    curso: state.curso
  })

export default connect(mapStateToProps)(CourseForm);