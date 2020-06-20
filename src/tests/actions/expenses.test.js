import moment from 'moment';
import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const result = removeExpense({ id: '123' });
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123',
  });
});

test('should setup edit expense action object', () => {
  const id = '123';
  const now = moment();
  const updates = {
    description: 'description',
    amount: 'amount',
    createAt: now,
    note: 'note',
  };
  const expectedObject = {
    type: 'EDIT_EXPENSE',
    id,
    updates,
  };
  const result = editExpense(id, updates);
  expect(result).toEqual(expectedObject);
});

test('should setup add expense action object with provided values', () => {
  const now = moment();
  const expenseData = {
    description: 'description',
    amount: 'amount',
    createdAt: now,
    note: 'note',
  };
  const expectedData = {
    type: 'ADD_EXPENSE',
    expense: {
      description: 'description',
      amount: 'amount',
      createdAt: now,
      note: 'note',
    },
  };
  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action object with default values', () => {
  const expectedExpenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: '',
  };
  const result = addExpense({});
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expectedExpenseData,
      id: expect.any(String),
    },
  });
});
