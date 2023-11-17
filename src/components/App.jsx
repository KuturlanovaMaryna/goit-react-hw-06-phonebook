import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import Search from './Search/Search';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneStore.contacts);

  const [filter, setFilter] = useState('');

  const handleDeleteUser = id => {
    if (window.confirm('Are you sure?')) {
      const deleteContactAction = {
        type: 'contacts/deleteUser',
        payload: id,
      };
      dispatch(deleteContactAction);
    }
  };

  const createUser = contact => {
    if (
      contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notify.warning(`${contact.name} is alredy in your contacts`);
      return;
    }
    const newContact = {
      ...contact,
      id: nanoid(),
    };

    const addProductAction = {
      type: 'contacts/createUser',
      payload: newContact,
    };
    dispatch(addProductAction);
  };

  const handlerSearch = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className={css.appContainer}>
      <h1 className={css.titleText}>Phone book</h1>
      <ContactForm onSubmit={createUser} />
      <p className={css.searchText}>Find contacts by name</p>
      <Search onChange={handlerSearch} value={filter} />
      <ContactList
        handleDeleteUser={handleDeleteUser}
        contacts={contacts}
        filter={filter}
      />
    </div>
  );
};

export default App;
