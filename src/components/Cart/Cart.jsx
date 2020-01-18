import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Cart.scss';
import { Button } from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHiddenAction } from '../../redux/cart/cart.actions';

const Cart = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      handleClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHiddenAction());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);
const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default withRouter(connect(mapStateToProps, null)(Cart));
