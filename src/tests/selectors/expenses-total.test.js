import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
  const expenses = [];
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const expense = [{ ...expenses[0] }];
  const expectedAmount = expenses[0].amount;
  const result = selectExpensesTotal(expense);
  expect(result).toBe(expectedAmount);
});

test('should correctly add multiple expenses', () => {
  const expectedAmount = expenses.reduce((prev, cur) => {
    return prev + cur.amount;
  }, 0);

  const result = selectExpensesTotal(expenses);
  expect(result).toBe(expectedAmount);
});
