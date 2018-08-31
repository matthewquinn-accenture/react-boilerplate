import React from 'react'
import { shallow } from 'enzyme'

import { About } from '../../src/components/About.jsx'

describe('Example tests for About', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />)
  })

  it('about renders on the page', () => {
    expect(wrapper).toBeTruthy()
  })

  it('about renders h1 tag on the page', () => {
    expect(wrapper.containsMatchingElement(<h1> About Page </h1>)).toBe(true)
  })
});
