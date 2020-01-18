import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import Collection from '../Collection/Collection';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/Firebase';
import { updateCollectionsAction } from '../../redux/shop/shop.actions';
import withSpinner from '../../HOC/withSpinner/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollectionsAction(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
