import React from 'react';
import { shallow } from 'enzyme';
import { ToStorage } from '../../../src/features/kit';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ToStorage />);
  expect(renderedComponent.find('.kit-to-storage').length).toBe(1);
});
