import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CollectionOverview.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collection) => (
      <CollectionPreview
        key={collection.id}
        linkUrl={collection.linkUrl}
        title={collection.title}
        items={collection.items}
      />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps, null)(CollectionOverview);
