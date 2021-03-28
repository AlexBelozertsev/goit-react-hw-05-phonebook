import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './phonebook-actions';

const itemReducer = createReducer([], {
  [contactActions.addContact]: (state, { payload }) => {
    const checkDublicat = state.filter(item => payload.name === item.name);
    if (checkDublicat.length) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [...state, payload];
  },
  [contactActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReduser = createReducer('', {
  [contactActions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReduser,
});

export default contactsReducer;
