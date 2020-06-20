import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    ...expenses[0],
    id: '4',
  };
  newExpense.id = '4';
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense,
  };
  const state = expensesReducer(expenses, action);
  const addedExpense = state.find((expense) => {
    expense.id === '4';
  });
  expect(addedExpense).not.toBeNull();
});

test('should edit an expense', () => {
  expenses[0].amount = 5000;
  const action = {
    type: 'EDIT_EXPENSE',
    expense: expenses[0],
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(5000);
});

test('should not edit an expense when id not found', () => {
  const editedExpense = expenses[0];
  editedExpense.id = 5000;
  const action = {
    type: 'EDIT_EXPENSE',
    expense: editedExpense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
