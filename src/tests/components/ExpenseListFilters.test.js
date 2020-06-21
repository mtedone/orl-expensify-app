import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { setStartDate, setEndDate } from '../../actions/filters';

let setTextFilterSpy,
  sortByDateSpy,
  sortByAmountSpy,
  setStartDateSpy,
  setEndDateSpy,
  wrapper;

beforeEach(() => {
  setTextFilterSpy = jest.fn();
  sortByAmountSpy = jest.fn();
  sortByDateSpy = jest.fn();
  setStartDateSpy = jest.fn();
  setEndDateSpy = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilterSpy}
      sortByDate={sortByDateSpy}
      sortByAmount={sortByAmountSpy}
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper.debug()).toMatchSnapshot();
});

test('should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: {
      value: 'bill',
    },
  });
  expect(setTextFilterSpy).toHaveBeenLastCalledWith('bill');
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDateSpy).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
    startDate,
    endDate,
  });
  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';

  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(
    calendarFocused
  );
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
