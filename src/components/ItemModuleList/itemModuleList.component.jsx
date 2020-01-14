import React from 'react'; 
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from 'react-redux';
import {setModulo} from "../../redux/curso/curso.actions";
const ItemModuleList = ({modulo,setModulo}) => {
  console.log("El modulo que me esta llegando es  : ");
  console.log(modulo);

  const handleClick = () => {
    console.log("El modulo a insertar es : ");
    console.log(modulo);
    setModulo(modulo);
  }
    

    const StyledMenuItem = withStyles(theme => ({
        root: {
          '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
              color: theme.palette.common.white,
            },
          },
        },
      }))(MenuItem);

    return(
        <div onClick={handleClick}>
        <StyledMenuItem>

      <ListItemText>modulo {modulo.index} </ListItemText>
      </StyledMenuItem>
        </div>
    )
}



const mapDispatchToProps = dispatch =>({
  setModulo : modulo => dispatch(setModulo(modulo))
})


export default connect(null,mapDispatchToProps)(ItemModuleList);