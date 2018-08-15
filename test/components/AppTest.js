import React from 'react'
import { shallow } from 'enzyme'

import { App } from '../../src/components/App.jsx'

describe('Example tests for App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('app renders on page', () => {
    expect(wrapper).toBeTruthy();
  });

  it('app renders h1 on page', () => {
    expect(wrapper.containsMatchingElement(<h1> Hello World! </h1>)).toBe(true);
  })
});
