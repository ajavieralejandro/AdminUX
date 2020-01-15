import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useState} from "react";
//Components
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CourseForm from '../CourseForm/courseform.component';
import DocentesContent from "../DocentesContent/docentescontent.component";
import Noise from "../noise/Noise";
import GenericView from "../GenericView/generic-view.component";
import GenericForm from "../GenericForm/generic-form.component";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

const DrawnerNavBar = () => {
  const dummyCategories = ['Cursos', 'Alumnos', 'Docentes']
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const [toShow, setToShow] = useState(<CourseForm title="Cursos"/>);
  const docentesView = <GenericView title="docente" />;

  const handleClick = (text) => {
    
    if(text==='Cursos')
    setToShow(<CourseForm  title="Cursos" />);
    else if(text==='Docentes')
    setToShow(<GenericForm WrappedComponent1={GenericView} WrappedComponent2={DocentesContent} title="Docentes" insertar={true} />);
    else 
    setToShow(<GenericForm WrappedComponent1={Noise} title="Alumnos" />);
    
    if(mobileOpen)
      setMobileOpen(!mobileOpen);
  
}



function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
 
  }
const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem button onClick={() => {handleClick(text)}} key={text} >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin API
          </Typography>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
<Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="sm">
        {toShow}
        </Container>
        
      </div>
    </div>
  );
}

export default DrawnerNavBar;