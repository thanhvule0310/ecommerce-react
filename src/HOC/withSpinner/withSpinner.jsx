import React from 'react';

import './withSpinner.scss';

const withSpinner = (WrapperComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <div className="spinner-overlay">
      <div className="spinner-container" />
    </div>
  ) : (
    <WrapperComponent {...otherProps} />
  );

export default withSpinner;
