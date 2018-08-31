import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<App />);
  expect(renderedComponent.find('.kit-app').length).toBe(1);
});
