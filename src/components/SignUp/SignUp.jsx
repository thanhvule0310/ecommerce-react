import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './SignUp.scss';
import Input from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { signUpStartAction } from '../../redux/user/user.actions';
import { selectSignUpLoading } from '../../redux/user/user.selectors';
import Loading from '../UI/Loading/Loading';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    if (password !== confirmPassword) {
      alert('passwords do not match');
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { isLoading } = this.props;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <Input
            name="displayName"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            label="Display name"
            required
          />
          <Input
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="Your email"
            required
          />
          <Input
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <Input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm password"
            required
          />
          <Button type="submit">
            {isLoading ? <Loading /> : 'Sign in with Google'}
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectSignUpLoading,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredientials) =>
    dispatch(signUpStartAction(userCredientials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
