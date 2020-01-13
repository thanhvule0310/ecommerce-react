import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, type }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="button" type={type}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};
Button.defaultProps = { type: 'button' };
export default Button;
