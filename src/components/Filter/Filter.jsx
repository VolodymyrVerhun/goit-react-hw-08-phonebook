import React from 'react';

import style from './Filter.module.css';
import { setFilterValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contactsSlice';

const selectFilterValue = state => state.filter;
export const selectFilterContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, value) => {
    const normalized = value.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  }
);
export default function Filter() {
  const value = useSelector(selectFilterValue);

  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <>
      <label className={style.label} htmlFor="number">
        Find contacts by name
      </label>
      <input
        className={style.input}
        onChange={handleChange}
        value={value}
        type="text"
      />
    </>
  );
}
