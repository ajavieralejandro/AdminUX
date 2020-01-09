import React,{useState,useEffect} from 'react'
//Componentes
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DocenteMenu from '../DocenteMenu/DocenteMenu.component';
import Fade from '@material-ui/core/Fade';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

//Estilos
import './docentesform.style.scss';
import DocentesContent from '../DocentesContent/docentescontent.component';



const DocentesForm = ({formTitle,title}) => {



const agregarDocente = () => {
    setchecked(false);
    setchecked2(true);
}


const [checked, setchecked] = useState(true);
const [checked2,setchecked2] = useState(false);



    return(

        <Card className="cardForm">
        <div className="docentesForm">


        <Typography variant="body2" color="textSecondary" component="div"><h2>Formulario de Docentes</h2></Typography>



        <CardContent>
        <Fade in={checked}>
        <div>
         {checked? <div>
            <DocenteMenu handleClick={agregarDocente} />
        </div>   : null}
        </div>
                             
        </Fade> 
        
        <Fade in={checked2}>
            <div>
                {checked2?<DocentesContent />:null}
            </div>
        </Fade>

       
        </CardContent>
      

            </div>
            {!checked? 
                <div className="Mybutton">
                <Button
                size="large" 
                >
                  Atras
                </Button>
                </div>: null}

        </Card>


       
    );
}

export default DocentesForm;