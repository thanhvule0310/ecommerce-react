import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../../assets/svg/shopping-bag.svg';

import './CartIcon.scss';
import { toggleCartHiddenAction } from '../../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <button type="button" className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </button>
);

const mapStateToProps = (state) => ({ itemCount: selectCartItemsCount(state) });

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
