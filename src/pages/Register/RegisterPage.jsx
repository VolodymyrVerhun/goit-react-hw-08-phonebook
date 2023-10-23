import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/authSlice';
import style from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerUser(formData));
  };
  return (
    <div className={style.block}>
      <h1 className={style.tittle}>Please, register</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <span className={style.span}>Username:</span>
          <input
            className={style.input}
            type="text"
            name="userName"
            placeholder="Enter your name..."
            required
          />
        </label>
        <label>
          <span className={style.span}>Email:</span>
          <input
            className={style.input}
            type="email"
            name="userEmail"
            placeholder="Enter your email..."
            required
          />
        </label>
        <label>
          <span className={style.span}>Password:</span>
          <input
            className={style.input}
            type="passwiord"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
            required
          />
        </label>
        <button className={style.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
