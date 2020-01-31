import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './SignIn.scss';
import Input from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import {
  googleSignInStartAction,
  emailSignInStartAction,
} from '../../redux/user/user.actions';
import {
  selectEmailSignInLoading,
  selectGoogleSignInLoading,
} from '../../redux/user/user.selectors';
import Loading from '../UI/Loading/Loading';

const SignIn = ({
  googleSignInStart,
  isEmailLoading,
  isGoogleLoading,
  emailSignInStart,
}) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
          label="email"
        />

        <Input
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
          label="password"
        />

        <div className="wrapper-buttons">
          <Button type="submit">
            {isEmailLoading ? <Loading /> : 'Sign in'}
          </Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            {isGoogleLoading ? <Loading /> : 'Sign in with Google'}
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isEmailLoading: selectEmailSignInLoading,
  isGoogleLoading: selectGoogleSignInLoading,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStartAction({ email, password })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
