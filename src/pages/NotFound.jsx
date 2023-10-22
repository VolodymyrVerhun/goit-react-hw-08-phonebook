import { HOME_ROUTE } from 'constance/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      Error 404. Sorry, page wasn't found
      <Link to={HOME_ROUTE}>Back to the Home page</Link>
    </div>
  );
}
