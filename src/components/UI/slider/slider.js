import React from 'react';
import Carousel from 'react-material-ui-carousel';
//https://openbase.com/js/react-material-ui-carousel
import {Button} from '@mui/material';

const Nav=({onClick, className, style, next}) => {

  return (
      <Button onClick={onClick} className={className} style={style}>
          {next && "Nextfdsdf"}
      </Button>
  )
}

function MyCarousel({children}) {

  return ( 
  <Carousel
navButtonsAlwaysInvisible
indicators={false}
 >
    {children}
  </Carousel> 
    
  )
}

export default MyCarousel;