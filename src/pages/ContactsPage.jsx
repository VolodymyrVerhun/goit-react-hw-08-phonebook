import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addContacts,
  deleteContacts,
  requestContacts,
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contactsSlice';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
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
    <div>
      <h1>PhoneBook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input type="text" required name="contactName" minLength={2} />
        </label>
        <label>
          <p>Number:</p>
          <input type="number" required name="contactNumber" minLength={6} />
        </label>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </form>
      {error !== null && (
        <p className="error">Ooops, some error. Please try again later.</p>
      )}
      {isLoading && <Loader />}
      <ul>
        {showContact &&
          contacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                <h3>
                  Name: {name}
                  <button onClick={() => handleDeleteContact(id)}>
                    &times;
                  </button>
                </h3>
                <p>
                  Phone Number: <b>{number}</b>
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
