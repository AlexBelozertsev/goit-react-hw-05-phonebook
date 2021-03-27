import React from 'react';
import { connect } from 'react-redux';
import style from './Contacts.module.css';
// import PropTypes from 'prop-types';
import Contact from './Contact';
import phonebookActions from '../../redux/phonebook-actions';

const Contacts = ({ list, onDeliteContact }) => {
  return (
    <div className={style.contactsContainer}>
      <ul className={style.contactsList}>
        {list.length > 0 &&
          list.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
              <Contact
                name={name}
                number={number}
                onDeliteContact={() => onDeliteContact(id)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

// Contacts.propTypes = {
//   list: PropTypes.array.isRequired,
//   onDeliteContact: PropTypes.func.isRequired,
// };

const getVisibleContact = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContact = allItems.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
  return filteredContact.length ? filteredContact : allItems;
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  return { list: getVisibleContact(items, filter) };
};

const mapDispatchToProps = dispatch => ({
  onDeliteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
