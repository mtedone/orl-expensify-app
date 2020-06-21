import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, editExpenseSpy, removeExpenseSpy, historySpy;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  historySpy = {
    push: jest.fn(),
  };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={historySpy}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});
