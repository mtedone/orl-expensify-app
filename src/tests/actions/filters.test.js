import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0),
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0),
  });
});

test('should generate set text filter action object with provided text', () => {
  const text = 'Hello World';
  const result = setTextFilter(text);
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

test('should generate set text filter action object with default text', () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should generate sort by date action object', () => {
  const result = sortByDate();
  expect(result).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date',
  });
});

test('should generate sort by amount action object', () => {
  const result = sortByAmount();
  expect(result).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount',
  });
});
