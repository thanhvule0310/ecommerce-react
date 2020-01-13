import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Auth from './pages/Auth/Auth';
import { auth } from './firebase/Firebase';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
