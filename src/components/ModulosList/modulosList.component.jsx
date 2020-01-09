import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import {createStructuredSelector} from "reselect";
import {getModulos} from "../../redux/curso/curso.selectors";
import ItemModuleList from "../ItemModuleList/itemModuleList.component";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));



function ModulosList({modulos}) {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [verModulos, setVerModulos] = useState(false)

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setVerModulos(!verModulos);
  };



  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        {verModulos?<p>Cerrar</p>:<p>Ver Modulos</p>}
      </Button>

      {verModulos?modulos.map((item)=><ItemModuleList  modulo={item} key={item.id} /> ): null}
  
    </div>
  );
}

const mapStateToProps =  createStructuredSelector({
  modulos : getModulos
})

export default connect (mapStateToProps)(ModulosList)