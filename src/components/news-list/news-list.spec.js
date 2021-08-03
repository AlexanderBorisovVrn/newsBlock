import React from 'react';
import NewsList from './news-list';
import {shallow} from 'enzyme';

const setUp =(props)=> shallow(<NewsList/>)

describe('render NewsList component', () => {
let comp;
beforeEach(()=>{comp = setUp()})
  it('should contain .news-list', () => {
    expect(comp).toMatchSnapshot();
  })

})