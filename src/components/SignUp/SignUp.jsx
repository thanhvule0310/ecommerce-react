import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './SignUp.scss';
import Input from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { signUpStartAction } from '../../redux/user/user.actions';
import { selectSignUpLoading } from '../../redux/user/user.selectors';
import Loading from '../UI/Loading/Loading';

const SignUp = ({ signUpStart, isLoading }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <Input
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          label="Display name"
          required
        />
        <Input
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Your email"
          required
        />
        <Input
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <Input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <Button type="submit">{isLoading ? <Loading /> : 'Sign Up'}</Button>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectSignUpLoading,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredientials) =>
    dispatch(signUpStartAction(userCredientials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
