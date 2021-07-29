import {shallow} from 'enzyme';
import React from 'react';
import ArticleCard from './article-card';

const setUp = (props)=>shallow( <ArticleCard>{props}</ArticleCard>)

describe('should be render component ArticleCard', () => {
  it('should contain .article-card', () => {
    const comp = setUp();
    const wrap = comp.find('.article-card');
    expect(wrap.length).toBe(1);
  })

  it('should contain link', () => {
    const comp =setUp();
    const wrap = comp.find('Link');
    expect(wrap.length).toBe(1);
  })
})
