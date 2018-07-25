import React from 'react';
import SubmitFormComponent from './SubmitForm';
import { Query } from 'react-apollo';
import getAvailableOptions from '../graphql/queries/getAvailableOptions';

class SubmitFormFixture extends React.Component {
  static displayName = 'SubmitForm';

  render() {
    return (
      <Query query={getAvailableOptions}>{() => <SubmitFormComponent />}</Query>
    );
  }
}

export default {
  apollo: {
    getAvailableOptions: {
      resolveWith: {
        availableOptions: {
          __typename: 'availableOptions',
          availableAggregationLevels: [
            {
              __typename: 'availableAggregationLevels',
              label: 'blah',
              value: 'blah',
            },
          ],
          availableFileTypes: [
            {
              __typename: 'availableFileTypes',
              label: 'blah',
              value: 'blah',
            },
          ],
          availableMeasurements: [
            {
              __typename: 'availableMeasurements',
              identifier: 'blah',
              label: 'blah',
            },
          ],
          availableMeters: [
            {
              __typename: 'availableMeters',
              id: '123',
              meterClassification: 'blah',
              meterDescription: 'blah',
              meterIdentifier: 'blah',
              meterType: 'blah',
              siteClassification: 'blah',
              siteName: 'blah',
            },
          ],
          availableTimeAggregationLevels: [
            {
              __typename: 'availableTimeAggregationLevels',
              label: 'blah',
              value: 'blah',
            },
          ],
          availableTimeZones: [
            {
              __typename: 'availableTimeZones',
              label: 'blah',
              value: 'blah',
            },
          ],
          submitted: true,
        },
      },
    },
    saveExportDataRequest: {
      resolveWith: apolloData => {
        return {
          saveExportDataRequest: {
            NoResponse: null,
            __typename: 'saveExportDataRequest',
          },
        };
      },
    },
  },
  component: SubmitFormFixture,
};
