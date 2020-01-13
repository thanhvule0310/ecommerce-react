import React from 'react';
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

export default Input;
