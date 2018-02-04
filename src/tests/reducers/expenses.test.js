import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';




test('should set defaultState', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });;
    expect(state).toEqual([]);
});

test('should add expenses', () => {
    const expense = {
        id: 4,
        description: 'bonsoir',
        note: '',
        amount: 120,
        creationDate: moment(0)
    };
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense});
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expenses', () => {
    const state = expensesReducer(expenses, { 
        type: 'REMOVE_EXPENSE', 
        id : 1 
    });
    expect(state).toEqual([expenses[1], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: -1
    });
    expect(state).toEqual(expenses);
});


test('should edit expenses', () => {
    const updates = {
        description: 'Test',
    };
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    });
    expect(state).toEqual(
        [
            expenses[0], 
            expenses[1], 
            {
                ...expenses[2], 
                ...updates 
            } 
        ]);
});


test('should not edit expenses if id not found', () => {
    const updates = {
        description: 'Test',
    };
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates
    });
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action= {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})