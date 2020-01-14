import React from 'react';

import './Button.scss';

const Button = ({
  children,
  type = 'button',
  onClick,
  isGoogleSignIn,
  inverted,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${
      inverted ? 'inverted' : ''
    } button`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
