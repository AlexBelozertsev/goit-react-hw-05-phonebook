import React from 'react';
import './Filter.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label className="Filter">
      Find contact by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const getVisibleFilter = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContact = allItems.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
  return filteredContact.length ? filter : '';
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  return { value: getVisibleFilter(items, filter) };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
