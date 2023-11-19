import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import Search from './Search/Search';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, createNewUser } from 'redux/phone.reduser';
import { filterContact } from 'redux/filter.reducer';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneStore.contacts);
  const filter = useSelector(state => state.filterStore);

  const handleDeleteUser = id => {
    if (window.confirm('Are you sure?')) {
      // const deleteContactAction = {
      //   type: 'contacts/deleteUser',
      //   payload: id,
      // };
      dispatch(deleteUser(id));
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

    // const addProductAction = {
    //   type: 'contacts/createUser',
    //   payload: newContact,
    // };
    dispatch(createNewUser(newContact));
  };

  const handlerSearch = e => {
    const filtered = e.currentTarget.value;
    dispatch(filterContact(filtered));
    // setFilter(e.currentTarget.value);
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
