import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import Layout from './components/Layout';
import Title from './components/Title';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

const App = ({ contacts }) => {
  return (
    <Layout>
      <Title text={'Phonebook'} />
      <Form />
      {contacts.length > 0 && <Title text={'Contacts'} />}
      {contacts.length > 1 && <Filter />}
      <Contacts />
    </Layout>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
