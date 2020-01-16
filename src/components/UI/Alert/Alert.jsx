import React from 'react';

import './Alert.scss';

const Alert = ({ type = 'primary', children }) => (
  <div className={type}>{children}</div>
);

export default Alert;
