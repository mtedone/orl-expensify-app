import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper.debug()).toMatchSnapshot();
});

test('should render Expense Form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper.debug()).toMatchSnapshot();
});

test('should handle error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper.debug()).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper.debug()).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value: value },
    });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'Some note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: {
      value: value,
    },
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const value = '12.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: {
        value: value,
      },
    });
  expect(wrapper.state('amount')).toBe(value);
});

test('should ', () => {
  const value = '12.500';
  const wrapper = shallow(<ExpenseForm />);
  const wrapperState = wrapper.state();
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: {
        value: value,
      },
    });
  expect(wrapper.state()).toEqual(wrapperState);
});
