import actionTypes from './cart.types';

export const toggleCartHiddenAction = () => ({
  type: actionTypes.TOGGLE_CART_HIDDEN,
  payload: null,
});

export const addItemAction = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: actionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItemAction = (item) => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item,
});
