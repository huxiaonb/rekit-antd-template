import React from 'react';
import { shallow } from 'enzyme';
import { Inventory } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Inventory />);
  expect(renderedComponent.find('.kit-inventory').length).toBe(1);
});
