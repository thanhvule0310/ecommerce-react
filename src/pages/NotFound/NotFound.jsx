import React from 'react';
import { withRouter } from 'react-router-dom';

import './NotFound.scss';
import { Button } from '../../components/UI/Button/Button';
import { ReactComponent as NotFoundImage } from '../../assets/svg/notfound.svg';

const NotFound = ({ history }) => {
  const onClick = () => {
    history.push('/');
  };
  return (
    <div className="container-notfound">
      <NotFoundImage className="wrapper-img" />
      <h1>Oops! Page not found</h1>
      <Button onClick={onClick}>Back To Home</Button>
    </div>
  );
};

export default withRouter(NotFound);
