import React, { useState } from 'react';
import backToTop from '../../utils/BackToTop/BackToTop';

import './ButtonToTop.scss';

const ButtonToTop = () => {
  const [windowLocation, setWindowLocation] = useState(0);
  const windowScreenY = window.screenY;
  const handleClick = () => {
    backToTop();
  };

  const handleScroll = () => {
    setWindowLocation(window.pageYOffset);
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <button
      type="button"
      style={{ display: windowLocation > windowScreenY ? 'block' : 'none' }}
      className="btn-to-top"
      onClick={handleClick}
    >
      &#9650;
    </button>
  );
};

export default ButtonToTop;
