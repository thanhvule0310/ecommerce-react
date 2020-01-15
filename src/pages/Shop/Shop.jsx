import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import Collection from '../Collection/Collection';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
