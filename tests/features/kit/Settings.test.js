import React from 'react';
import { shallow } from 'enzyme';
import { Settings } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Settings />);
  expect(renderedComponent.find('.kit-settings').length).toBe(1);
});
