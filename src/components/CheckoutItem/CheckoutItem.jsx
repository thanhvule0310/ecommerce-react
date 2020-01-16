import React from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.scss';
import {
  clearItemFromCart,
  addItemAction,
  removeItemAction,
} from '../../redux/cart/cart.actions';
import { MinimalButton } from '../UI/Button/Button';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={cartItem.imageUrl} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <MinimalButton handleClick={() => removeItem(cartItem)}>
        &#10094;
      </MinimalButton>
      <span className="value">{cartItem.quantity}</span>
      <MinimalButton handleClick={() => addItem(cartItem)}>
        &#10095;
      </MinimalButton>
    </span>
    <span className="price">${cartItem.price}</span>
    <MinimalButton handleClick={() => clearItem(cartItem)}>
      &#10005;
    </MinimalButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItemAction(item)),
  removeItem: (item) => dispatch(removeItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
