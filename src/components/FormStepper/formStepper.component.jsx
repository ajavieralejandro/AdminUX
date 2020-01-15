import React from 'react';
//Componentes
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {addCourseToCollection} from "../../firebase/firebase.utils";

//Estilo
import './formStepper.style.scss';


const getSteps = () => {
    return ['Crea un nuevo curso', 'Ingrese Modulos', 'Confirma el curso'];
  }

  

const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return ;
      case 1:
        return 'Inserte modulos nuevos!';
      case 2:
        return 'Inserta el curso en la base de datos';
      default:
        return 'Unknown stepIndex';
    }
  }


const FormStepper = ({onBack,onNext}) => {


    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

   

    //Posible refactorización 
    const handleNext = () => {
        if(onNext()){
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
        else
            alert("No puedes avanzar ahora");
        if(activeStep === steps.length - 1){
          addCourseToCollection(null);
        }
      };
    
      const handleBack = () => {
        onBack();
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };

    return (
        <div className="step-wrap">
        <div className="root">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography >Formulario Insertado</Typography>
              <Button onClick={handleReset}>Cargar nuevo curso</Button>
            </div>
          ) : (
            <div>
              <Typography >{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                size="large" 
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  
                >
                  Atras
                </Button>
                <Button className="right" size="large" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Insertar' : 'Siguiente'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
        
        
        </div>
    );
}



export default FormStepper;