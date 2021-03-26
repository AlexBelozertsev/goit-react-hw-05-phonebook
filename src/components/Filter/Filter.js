import React from 'react';
import './Filter.css';
// import PropTypes from 'prop-types';
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

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
