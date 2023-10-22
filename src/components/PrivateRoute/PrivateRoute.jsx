import { LOGIN_ROUTE } from 'constance/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserAuthification } from 'redux/authSlice';

export default function PrivateRoute({ children, redirectTo = LOGIN_ROUTE }) {
  const authenticated = useSelector(selectUserAuthification);
  return authenticated ? children : <Navigate to={redirectTo} replace />;
}
