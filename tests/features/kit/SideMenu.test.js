import React from 'react';
import { shallow } from 'enzyme';
import { SideMenu } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<SideMenu />);
  expect(renderedComponent.find('.kit-side-menu').length).toBe(1);
});
