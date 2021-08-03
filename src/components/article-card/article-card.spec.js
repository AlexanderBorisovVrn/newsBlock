import {shallow} from 'enzyme';
import React from 'react';
import ArticleCard from './article-card';

const setUp = (props)=>shallow( <ArticleCard>{{}}</ArticleCard>)

describe('should be render component ArticleCard', () => {
let comp;
beforeEach(()=>{
  comp = setUp();
})

  it('should contain .article-card', () => {
    const wrap = comp.find('.article-card');
    expect(wrap.length).toBe(1);
  })

  it('should contain link', () => {
    const wrap = comp.find('Link');
    expect(wrap.length).toBe(1);
  })


})
