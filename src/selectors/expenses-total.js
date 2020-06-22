const selectExpensesTotal = (expenses) => {
  let total = expenses.reduce((prev, cur) => {
    return prev + cur.amount;
  }, 0);
  return total;
};

export default selectExpensesTotal;
