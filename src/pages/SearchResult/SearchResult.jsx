import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './SearchResult.scss';
import CollectionsResult from '../../components/CollectionsResult/CollectionsResult';
import {
  selectCollectionForPreview,
  selectSearchKeyword,
} from '../../redux/shop/shop.selectors';
import { filterCollections } from '../../utils';

const SearchResult = ({ collections, keyword }) => {
  const [collectionsAfterFilter, setCollectionsAfterFilter] = useState(
    collections,
  );

  useEffect(() => {
    const newCollections = filterCollections(collections, keyword);
    setCollectionsAfterFilter(newCollections);
  }, [keyword, collections]);

  return (
    <div className="collections-overview">
      {collectionsAfterFilter.map((collection) => (
        <CollectionsResult
          key={collection.id}
          linkUrl={collection.linkUrl}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
  keyword: selectSearchKeyword,
});

export default connect(mapStateToProps, null)(SearchResult);
