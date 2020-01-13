import React from 'react';
import PropTypes from 'prop-types';

import './Label.scss';

const Label = ({ children, value, htmlFor }) => (
  <label
    className={`${value.length ? 'shrink' : ''} form-input-label`}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  value: PropTypes.string,
};

Label.defaultProps = { value: '', htmlFor: '' };
export default Label;
