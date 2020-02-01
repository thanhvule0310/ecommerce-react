import React from 'react';
import { withRouter } from 'react-router-dom';

import './NotFound.scss';
import { Button } from '../../components/UI/Button/Button';
import { ReactComponent as NotFoundImage } from '../../assets/svg/notfound.svg';

class NotFound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  onClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;

    if (hasErrored) {
      return (
        <div className="container-notfound">
          <NotFoundImage className="wrapper-img" />
          <h1>Oops! Page not found</h1>
          <Button onClick={this.onClick}>Back To Home</Button>
        </div>
      );
    }
    return children;
  }
}

export default withRouter(NotFound);
