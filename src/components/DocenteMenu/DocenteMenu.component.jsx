import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';

const DocenteMenu = ({handleClick}) => {
    return( 

        <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
      >

                <Button
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleClick}
                >
                    Agregar Docente
                </Button>

               
                <Button
                startIcon={<AssignmentTwoToneIcon />}
                >
                    Ver Docentes
                </Button>
                    
        </Grid>)

}

export default DocenteMenu;