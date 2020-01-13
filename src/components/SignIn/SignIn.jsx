import React from 'react';

import './SignIn.scss';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

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

          <Button type="submit">Sign in</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
