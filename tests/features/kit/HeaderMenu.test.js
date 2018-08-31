import React from 'react';
import { shallow } from 'enzyme';
import { HeaderMenu } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<HeaderMenu />);
  expect(renderedComponent.find('.kit-header-menu').length).toBe(1);
});
