import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import CartIcon from '../Cart/CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {
  selectCurrentUser,
  selectSignOutLoading,
} from '../../redux/user/user.selectors';
import { signOutStartAction } from '../../redux/user/user.actions';
import Loading from '../UI/Loading/Loading';

const Header = ({ currentUser, hidden, signOutStart, isLoading }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={signOutStart}>
          {isLoading ? <Loading /> : 'SIGN OUT'}
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <Cart />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  isLoading: selectSignOutLoading,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
