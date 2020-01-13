import React from 'react';

import './PreviewCollection.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, name, price, imageUrl }) => (
          <CollectionItem
            key={id}
            name={name}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
