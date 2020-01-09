//Components
import React,{ useState ,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';



//Styles

import './navbar.style.scss';




 const Navbar = ({title}) => {

  const [count,setCount] = useState(0);


  
  
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY;
      setCount(show)
      
    
        }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })
 

return (
    <div className="root">
      <CssBaseline />
      <AppBar position="fixed" className="appbar"
      
    style={(count<15) ? {'background':'transparent','transition':'0.4s'}:{'backgroundColor':'black','transition':'0.4s'}}

        //backgroundColor={navBackground ? 'white' : 'transparent'}
        //style={{ transition: '1s ease' }}
        >
        <Toolbar>
          <Hidden smUp>
          <IconButton
            
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={()=>{}}
            className="menu-button"
          >
            <MenuIcon />
          </IconButton>
          </Hidden>
          
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      
   
     
    </div>
  );
}

export default Navbar;