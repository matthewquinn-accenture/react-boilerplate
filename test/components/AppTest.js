import React from 'react'
import { mount } from 'enzyme'

import { App } from '../../src/components/App.jsx'
import { Home } from '../../src/components/Home.jsx'
import { About } from '../../src/components/About.jsx'

describe('Example tests for App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  })

  it('app renders on page', () => {
    expect(wrapper).toBeTruthy();
  });

  it('app renders home component', () => {
    expect(wrapper.containsMatchingElement(Home)).toBe(true);
  })

  it('app renders about component', () => {
    expect(wrapper.containsMatchingElement(About)).toBe(true);
  })
});
