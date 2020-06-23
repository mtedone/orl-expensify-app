import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div>
    {props.expensesCount === 1 && (
      <p>
        Viewing 1 expense totalling
        {' ' + numeral(props.expensesTotal / 100).format('$0,0.00')}
      </p>
    )}
    {props.expensesCount > 1 && (
      <p>
        Viewing {props.expensesCount} expenses totalling{' '}
        {' ' + numeral(props.expensesTotal / 100).format('$0,0.00')}
      </p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  expensesCount: state.expenses.length,
  expensesTotal: selectExpensesTotal(state.expenses),
});

export default connect(mapStateToProps)(ExpensesSummary);
