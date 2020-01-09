
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


//Por ahora no estoy recibiendo nada
const CourseForm = (curso) => {

    const handleChange = (event) => {
        setFormTitle(event.target.value);
        
    }

   
    const [formTitle,setFormTitle] = useState("");
    const [checked, setChecked] = useState(true);
    const [checked2, setchecked2] = useState(false);
    const [toShow, settoShow] = useState(1);

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
        setChecked(false);
        //Linea de refactorizacion
        setchecked2(true);
        console.log("El valor es : "+toShow);
        settoShow(toShow+1);
        return true;
       
       
 
    }

    const handleBack = () => {
        //Esta linea deberia actualizarse en futuras refactorizaciones
        setChecked(true);
        setchecked2(false);

    }        
   


        const showContent = (state) => {
        console.log("Estoy invocando la funcion con : ");
        console.log(state);
        switch(state) {
            case  1 :
              return <CourseContent formTitle={formTitle}   handleChange={handleChange} />
            case  2:
              return <CourseContent2 formTitle={formTitle} />
            default:
              return null;
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