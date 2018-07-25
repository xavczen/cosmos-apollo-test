import React from "react";

import generateClient from "../graphql/apolloClient";
import getAvailableOptions from "../graphql/queries/getAvailableOptions";

import { ApolloProvider, Query } from "react-apollo";

import LoadingSpinner from "../Shared/LoadingSpinner";
import Submit from "./SubmitForm";

// TODO Error handling

interface IProps {
  baseURL: string;
}

// TODO Error handling
export default (props: IProps) => {
  const apolloClient = generateClient(props.baseURL);
  return (
    <ApolloProvider client={apolloClient}>
      <Query query={getAvailableOptions}>
        {({ loading, error, data }) => {
          if (error) return <span>Error! {JSON.stringify(error)} </span>;
          if (loading || !data) return <LoadingSpinner />;

          if (data.availableOptions.submitted) {
            return "Submitted";
          }

          return (
            <div>
              <Submit />
              {JSON.stringify(data)}
            </div>
          );
        }}
      </Query>
    </ApolloProvider>
  );
};
