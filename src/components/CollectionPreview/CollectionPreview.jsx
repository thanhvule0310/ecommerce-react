import React from 'react';
import { Link } from 'react-router-dom';

import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <div className="collection-header">
      <div className="title">{title}</div>
      <Link to={`/shop/${title.toLowerCase()}`} className="view-all">
        View all &rarr;
      </Link>
    </div>

    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
