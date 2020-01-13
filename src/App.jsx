import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
