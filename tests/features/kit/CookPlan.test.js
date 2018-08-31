import React from 'react';
import { shallow } from 'enzyme';
import { CookPlan } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CookPlan />);
  expect(renderedComponent.find('.kit-cook-plan').length).toBe(1);
});
