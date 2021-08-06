import React, { Children } from 'react';
import Article from './article';
import { shallow } from 'enzyme';

const setUp = (props)=>shallow(<Article>{{}}</Article>)

describe('should render Article component',()=>{
  it('it should contain .article',()=>{
    const comp =setUp()
    expect(comp).toMatchSnapshot();
  })
})

