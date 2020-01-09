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
      <article className="article">

      <Parallax
            
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../src/parallax.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div style={{ height: '800px', width:'800px' }} />
        </Parallax>
        </article>
        
      </header>

      <Noise />
      <Noise />
      <Noise />
      </div>
      
    
      
      
  );  
}

export default ParalaxPage;