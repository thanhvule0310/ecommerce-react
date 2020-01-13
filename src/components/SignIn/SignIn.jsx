import React from 'react';

import './SignIn.scss';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { signInWithGoogle } from '../../firebase/Firebase';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
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
            <Button type="submit">Sign in</Button>
            <Button type="submit" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;