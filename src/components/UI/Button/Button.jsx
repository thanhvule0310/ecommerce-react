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
    } button btn-success`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

const MinimalButton = ({ onClick, children, className }) => (
  <button
    type="button"
    className={className ? `minimal-button ${className}` : 'minimal-button'}
    onClick={onClick}
  >
    {children}
  </button>
);

export { Button, MinimalButton };
