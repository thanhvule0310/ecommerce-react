import React, { useState } from 'react';

import './Alert.scss';
import { MinimalButton } from '../Button/Button';

const Alert = ({ type = 'primary', children }) => {
  const [isShowAlert, setShowAlert] = useState(true);
  const handleClose = () => {
    setShowAlert(false);
  };
  return (
    <div
      className={type}
      style={{ display: isShowAlert ? 'absolute' : 'none' }}
    >
      {children}
      <div className="process" />
      <MinimalButton className="close" onClick={handleClose}>
        &#10005;
      </MinimalButton>
    </div>
  );
};

export default Alert;
