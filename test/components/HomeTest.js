import React from 'react'
import { shallow } from 'enzyme'

import { Home } from '../../src/components/Home.jsx'

describe('Exmple tests for Home', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('home renders on the page', () => {
    expect(wrapper).toBeTruthy()
  })

  it('home renders h1 tag on the page', () => {
    expect(wrapper.containsMatchingElement(<h1> Home Page </h1>)).toBe(true)
  })
});
