import React from 'react';
import { shallow } from 'enzyme';
import { PurchasePlan } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PurchasePlan />);
  expect(renderedComponent.find('.kit-purchase-plan').length).toBe(1);
});
