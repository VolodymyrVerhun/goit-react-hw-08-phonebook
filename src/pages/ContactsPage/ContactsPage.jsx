import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ContactsPage.module.css';

import {
  addContacts,
  deleteContacts,
  requestContacts,
  selectError,
  selectIsLoading,
} from 'redux/contactsSlice';
import Filter, { selectFilterContacts } from 'components/Filter/Filter';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilterContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.contactName.value;
    const number = event.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };
    console.log('formData: ', formData);
    dispatch(addContacts(formData));
    event.currentTarget.reset();
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const showContact = Array.isArray(contacts) && contacts.length > 0;
  return (
    <div className={style.block}>
      <h1 className={style.tittle}>PhoneBook</h1>
      <div className={style.flex_block}>
        <form className={style.form} onSubmit={handleSubmit}>
          <label>
            <p className={style.span}>Name:</p>
            <input
              className={style.input}
              type="text"
              required
              placeholder="Enter your name..."
              name="contactName"
              minLength={2}
            />
          </label>
          <label>
            <p className={style.span}>Number:</p>
            <input
              className={style.input}
              type="number"
              required
              placeholder="Enter your number..."
              name="contactNumber"
              minLength={6}
            />
          </label>
          <div>
            <button className={style.btn} type="submit">
              Add contact
            </button>
          </div>
        </form>
        {error !== null && (
          <p className="error">Ooops, some error. Please try again later.</p>
        )}
        {isLoading && <Loader />}

        <div className={style.container}>
          <Filter />
          <ul className={style.list}>
            {showContact &&
              contacts.map(({ name, number, id }) => {
                return (
                  <li className={style.li} key={id}>
                    <div className={style.contact}>
                      <p>
                        Name: <b className={style.b}>{name}</b>
                      </p>
                      <p>
                        Phone Number: <b className={style.b}>{number}</b>
                      </p>
                    </div>
                    <button
                      className={style.btndel}
                      onClick={() => handleDeleteContact(id)}
                    >
                      delete
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
