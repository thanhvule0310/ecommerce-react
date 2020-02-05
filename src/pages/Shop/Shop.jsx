import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './Shop.scss';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverviewContainer';
import CollectionContainer from '../Collection/CollectionContainer';
import { fetchCollectionsStartAction } from '../../redux/shop/shop.actions';

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStartAction()),
});

export default connect(null, mapDispatchToProps)(Shop);
