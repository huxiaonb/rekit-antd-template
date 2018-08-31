import React from 'react';
import { shallow } from 'enzyme';
import { FoodPanel } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<FoodPanel />);
  expect(renderedComponent.find('.kit-food-panel').length).toBe(1);
});
