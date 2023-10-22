import React, { useEffect } from 'react';
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from 'constance/routes';
import {
  logoutUser,
  refreshUser,
  selectUserAuthification,
  selectUserData,
} from 'redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Navigation() {
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthification);
  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <nav className={style.nav}>
      <NavLink to={HOME_ROUTE}>Home</NavLink>
      {authenticated ? (
        <>
          <NavLink to={CONTACTS_ROUTE}>Contacts</NavLink>
          <span>Hello, {userData.name}</span>
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <>
          <NavLink to={LOGIN_ROUTE}>Login</NavLink>
          <NavLink to={REGISTER_ROUTE}>Register</NavLink>
        </>
      )}
    </nav>
  );
}
