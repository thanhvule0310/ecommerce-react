import React from 'react';

import './CollectionsResult.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionsResult = ({ title, items }) => (
  <div className="collection-preview">
    <div className="collection-header">
      <div className="title">{title}</div>
    </div>

    <div className="preview">
      {items.length ? (
        items.map((item) => <CollectionItem key={item.id} item={item} />)
      ) : (
        <h3>There are no products to search for at {title}</h3>
      )}
    </div>
  </div>
);

export default CollectionsResult;
