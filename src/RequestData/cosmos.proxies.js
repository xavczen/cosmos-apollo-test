import PropTypes from 'prop-types';
import createApolloProxy from 'react-cosmos-apollo-proxy';

import myConfiguredClientOptions from '../graphql/apolloClient';

const ApolloProxy = createApolloProxy({
  clientOptions: myConfiguredClientOptions('fakeurl.com')
});

export default [ApolloProxy];
