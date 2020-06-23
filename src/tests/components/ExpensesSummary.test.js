import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should display ExpensesSummary correctly with one expense', () => {
  const total = selectExpensesTotal([expenses[0]]);
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={total} />
  );
  expect(wrapper.debug()).toMatchSnapshot();
});

test('should display ExpensesSummary correctly with many expenses', () => {
  const total = selectExpensesTotal([expenses[0], expenses[1]]);
  const wrapper = shallow(
    <ExpensesSummary expensesCount={2} expensesTotal={total} />
  );
  expect(wrapper.debug()).toMatchSnapshot();
});
