import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';
import Label from './Label/Label';

const Input = ({ handleChange, label, name, type, value, required }) => (
  <div className="group">
    <input
      className="form-input"
      name={name}
      type={type}
      value={value}
      required={required}
      onChange={handleChange}
    />
    {label ? (
      <Label value={value} htmlFor={name}>
        {label}
      </Label>
    ) : null}
  </div>
);

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = { required: false, value: '', label: null };

export default Input;
