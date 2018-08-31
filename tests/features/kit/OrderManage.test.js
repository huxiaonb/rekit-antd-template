import React from 'react';
import { shallow } from 'enzyme';
import { OrderManage } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<OrderManage />);
  expect(renderedComponent.find('.kit-order-manage').length).toBe(1);
});
