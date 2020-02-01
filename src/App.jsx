import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.scss';

import Header from './components/Header/Header';
import GlobalSpinner from './components/UI/Spinner/GlobalSpinner/GlobalSpinner';
import { checkUserSessionAction } from './redux/user/user.actions';
import { selectCurrentUser, selectAlert } from './redux/user/user.selectors';
import NotFound from './pages/NotFound/NotFound';
import Alert from './components/UI/Alert/Alert';

const Home = lazy(() => import('./pages/Home/Home'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Auth = lazy(() => import('./pages/Auth/Auth'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));

const App = ({ currentUser, checkUserSession, alert }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      {Object.keys(alert).length !== 0 ? (
        <Alert type={alert.type}>{alert.message}</Alert>
      ) : null}
      <Switch>
        <NotFound>
          <Suspense fallback={<GlobalSpinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/checkout" component={Checkout} />
            <Route
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
            />
            <Route path="/notfound" component={NotFound} />
          </Suspense>
        </NotFound>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  alert: selectAlert,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSessionAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
