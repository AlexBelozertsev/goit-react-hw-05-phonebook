import { combineReducers } from 'redux';
import types from './phonebook-types';

const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      const checkDublicat = state.filter(item => payload.name === item.name);
      if (checkDublicat.length) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReduser = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReduser,
});

export default contactsReducer;
