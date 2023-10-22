import { HOME_ROUTE } from 'constance/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserAuthification } from 'redux/authSlice';

export default function RestrictedRoute({ children, redirectTo = HOME_ROUTE }) {
  const authenticated = useSelector(selectUserAuthification);
  return authenticated ? <Navigate to={redirectTo} replace /> : children;
}
