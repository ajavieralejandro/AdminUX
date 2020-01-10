import React , {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GenericMenu from '../GenericMenu/generic-menu.component';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import './generic-form.styles.scss';


const GenericForm = ({WrappedComponent1,WrappedComponent2,title}) => {
    const [checked, setchecked] = useState(true);
    const [checked1, setchecked1] = useState(false);
    const [checked2, setchecked2] = useState(false);

    //funcion  atras 
    const handleBack = () => {
        setchecked(true);
        setchecked1(false);
        setchecked2(false);

    }

    const handleClick1 = () => {
        //console.log("Estoy llamando a handleClick1");
        setchecked(false);
        setchecked1(true);
        setchecked2(false);     

    }
    //Funccion de handleClick 2 
    const aux = () => {
        setchecked2(true);
        setchecked1(false);
        setchecked(false);
    }

    const handleClick2 = WrappedComponent2? aux : null;

    return(

      

        <Card className="cardForm">
        <div className="genericForm">


        <Typography variant="body2" color="textSecondary" component="div"><h2>Formulario de {title}</h2></Typography>



        <CardContent>
        <Fade in={checked}>
        <div>
         {checked? <div>
            <GenericMenu title={title} handleClick1={handleClick1} handleClick2={handleClick2} />

        </div>   : null}
        </div>
                             
        </Fade> 
        
        <Fade in={checked1}>
            <div>
                {checked1?<WrappedComponent1 />:null}
            </div>
        </Fade>

        <Fade in={checked2}>
        <div>
            {checked2?<WrappedComponent2 />:null}
        </div>
        </Fade>


       
        </CardContent>
      

            </div>
            {!checked? 
                <div className="Mybutton">
                <Button
                onClick={handleBack}
                size="large" 
                >
                  Atras
                </Button>
                </div>: null}

        </Card>

    )
}

export default GenericForm;