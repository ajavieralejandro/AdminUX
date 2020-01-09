import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';

const GenericMenu = ({title,handleClick1,handleClick2}) => {
    console.log("Carge bien el generic menu");
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
                onClick={handleClick1}
                >
                    Ver {title}
                </Button>
                
                {handleClick2? <Button
                    startIcon={<AssignmentTwoToneIcon />}
                    onClick={handleClick2}
                    >
                        Agregar {title}
                    </Button>: null}
               
                    
        </Grid>)

}

export default GenericMenu;