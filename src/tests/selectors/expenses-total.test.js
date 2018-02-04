import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should give back 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});


test('shouldadd up one expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});


test('should add up several expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});
