import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.debug()).toMatchSnapshot();
});
