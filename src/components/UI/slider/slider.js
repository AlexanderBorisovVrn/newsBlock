import React from 'react';
import Carousel from 'react-material-ui-carousel';
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
 >
    {children}
  </Carousel> 
    
  )
}

export default MyCarousel;