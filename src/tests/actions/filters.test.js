import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should setup setTextFilter action object with provided values', () => {
    const action = setTextFilter('Tadam!');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Tadam!'
    });
});

test('should setup setTextFilter action object with defaut values', () => {
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should setup sortByAmount action object with defaut values', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should setup sortByDate action object with defaut values', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});



test('should setup setStartDate action object with defaut values', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should setup setEndDate action object with defaut values', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
