import React from 'react';

import './Button.scss';

const Button = ({ children, type = 'button', onClick, isGoogleSignIn }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
