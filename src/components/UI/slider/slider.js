import React from 'react';
import Carousel from 'react-material-ui-carousel';
//https://openbase.com/js/react-material-ui-carousel

function MyCarousel({children}) {

  return (
    <Carousel
      navButtonsAlwaysInvisible
      indicators={false}>
      {children}
    </Carousel>

  )
}

export default MyCarousel;