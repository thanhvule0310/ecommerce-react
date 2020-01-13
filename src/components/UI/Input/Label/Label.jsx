import React from 'react';

import './Label.scss';

const Label = ({ children, value, htmlFor }) => (
  <label
    className={`${value.length ? 'shrink' : ''} form-input-label`}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

export default Label;
