import React, { useState } from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';
import { Button } from '../UI/Button/Button';
import { addItemAction } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    addItem(item);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 300);
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
      </div>
      <Button inverted onClick={handleClick} isSuccess={isAdded}>
        {isAdded ? 'Added' : 'Add to cart'}
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
