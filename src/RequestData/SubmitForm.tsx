import React, { Component } from "react";

import { Mutation } from "react-apollo";
import saveExportDataRequest from "../graphql/mutations/saveExportDataRequest";
import getAvailableOptions from "../graphql/queries/getAvailableOptions";

const updateCache = (cache: any) => {
  const { availableOptions } = cache.readQuery({ query: getAvailableOptions });

  cache.writeQuery({
    query: getAvailableOptions,
    data: {
      availableOptions: {
        ...availableOptions,
        submitted: true
      }
    }
  });
};

export default class SubmitForm extends Component<{}, {}> {
  public render() {
    return (
      <div>
        <Mutation mutation={saveExportDataRequest} update={updateCache}>
          {(submitRequest, { loading }) => {
            return (
              <button
                className="btn btn-primary"
                onClick={() => {
                  submitRequest({
                    variables: {
                      input: {
                        foo: "blah"
                      }
                    }
                  });
                }}
              >
                {loading ? "Loading" : "Submit"}
              </button>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
