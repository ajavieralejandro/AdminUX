import React from 'react';
//Components 
import Navbar from '../components/Navbar/navbar.component';
import { Parallax} from 'react-parallax';
import Noise from '../components/noise/Noise';

//Styles
import './paralax.page.style.scss';

const ParalaxPage  = (props) => {
  return(
      <div id="page-wrapper">
      <header className="App-header">
        {/* -----basic config-----*/}
      
      
      <Navbar title="Navbar" />

      <Parallax
            className="parallax"
            
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../src/parallax.png')}
            bgImageAlt="the dog"
            strength={100}
        >
            <div style={{ height: '800px', width:'800px' }} />

        </Parallax>
        
      </header>

      <Noise />
      <Noise />
      <Noise />
      </div>
      
    
      
      
  );  
}

export default ParalaxPage;