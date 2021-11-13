import React from 'react';
import TestimonialsCard from '../../testimonials-card/testimonials-card';
import MySlider from '../../UI/slider/slider';

const TestimonialsContainer = () => {
  const arr = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus erat dapib' +
          'us felis laoreet sodales. Suspendisse venenatis vel diam at elementum. Integer a' +
          'c mauris auctor justo commodo venenatis. ',
      userName: 'Jhon Travolta',
      userOrg: 'BBC',
      id:1
    }, {
      text: 'Quisque sem tortor, laoreet nec purus ut, rutrum iaculis tellus. Sed sed lacus v' +
          'ehicula, dapibus urna sit amet,ehicula, dapibus urna sit amet ehicula, dapibus urna sit amet congue tellus. In varius sem non semper molestie',
      userName: 'Judes Priest',
      userOrg: 'STortel',
      id:2
    }, {
      text: 'Nullam tincidunt arcu eget risus vehicula semper. Etiam ut urna et ligula posuer' +
          'e auctor. Duis congue pellentesque velit at fermentum. Etiam id consequat tellus' +
          '.',
      userName: 'Mac Macalan',
      userOrg: 'MC MT',
      id:3
    }
  ]

  return (

      <MySlider>
        {arr.map(({text, userName, userOrg,id}) => {
          return <TestimonialsCard text={text} userName={userName} userOrg={userOrg} key={id}/>
        })
}
      </MySlider>
  
  );
}

export default TestimonialsContainer;
