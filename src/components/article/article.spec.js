import React from 'react';
import Article from './article';
import { shallow } from 'enzyme';

describe('should render Article component',()=>{
  it('should render Article',()=>{
    const component = shallow(<Article>{{}}</Article>);
    const wrapper = component.find('.article');
    expect(wrapper.length).toBe(1)
  
  })
  
  
  it('should render text',()=>{
    const component = shallow(<Article>{{}}</Article>);
    const wrapper = component.find('p');
    expect(wrapper.length).toBe(2)
  })
})

