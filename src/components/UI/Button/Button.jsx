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

const MinimalButton = ({ handleClick, children }) => (
  <button type="button" className="minimal-button" onClick={handleClick}>
    {children}
  </button>
);

export { Button, MinimalButton };
