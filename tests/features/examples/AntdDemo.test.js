import React from 'react';
import { shallow } from 'enzyme';
import { AntdDemo } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AntdDemo />);
  expect(renderedComponent.find('.examples-antd-demo').length).toBe(1);
});
