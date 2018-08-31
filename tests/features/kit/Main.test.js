import React from 'react';
import { shallow } from 'enzyme';
import { Main } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Main />);
  expect(renderedComponent.find('.kit-main').length).toBe(1);
});
