import React from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.scss';
import {
  clearItemFromCart,
  addItemAction,
  removeItemAction,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={cartItem.imageUrl} />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <button
        className="arrow"
        type="button"
        onClick={() => removeItem(cartItem)}
      >
        &#10094;
      </button>
      <span className="value">{cartItem.quantity}</span>
      <button className="arrow" type="button" onClick={() => addItem(cartItem)}>
        &#10095;
      </button>
    </span>
    <span className="price">${cartItem.price}</span>
    <button
      type="button"
      className="remove-button"
      onClick={() => clearItem(cartItem)}
    >
      &#10005;
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItemAction(item)),
  removeItem: (item) => dispatch(removeItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
