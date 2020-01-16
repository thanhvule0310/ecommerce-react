import React from 'react';
import './Home.scss';

import Directory from '../../components/Directory/Directory';
import Alert from '../../components/UI/Alert/Alert';

const Home = () => (
  <div className="homepage">
    <Alert>Success</Alert>
    <Directory />
  </div>
);

export default Home;
