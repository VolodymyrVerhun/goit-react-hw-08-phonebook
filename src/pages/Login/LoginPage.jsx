import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authSlice';
import style from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    dispatch(loginUser(formData));
  };

  return (
    <div className={style.block}>
      <h1 className={style.tittle}>Please, log in</h1>
      <form className={style.form} onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
    </div>
  );
}
