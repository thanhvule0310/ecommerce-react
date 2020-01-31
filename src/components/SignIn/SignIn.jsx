import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './SignIn.scss';
import Input from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import {
  googleSignInStartAction,
  emailSignInStartAction,
} from '../../redux/user/user.actions';
import { selectLoadingState } from '../../redux/user/user.selectors';
import Loading from '../UI/Loading/Loading';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart, isLoading } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="email"
          />

          <Input
            name="password"
            type="password"
            value={password}
            required
            handleChange={this.handleChange}
            label="password"
          />

          <div className="wrapper-buttons">
            <Button type="submit">{isLoading ? <Loading /> : 'Sign in'}</Button>
            <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoadingState,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStartAction({ email, password })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
