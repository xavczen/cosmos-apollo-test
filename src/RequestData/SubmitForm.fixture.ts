import SubmitForm from './SubmitForm';

import getAvailableOptions from '../graphql/queries/getAvailableOptions';

export default {
  component: SubmitForm,
  apollo: {
    resolveWith: (apolloData: any) => {
      const fakeData = {
        availableOptions: {
          availableFileTypes: [
            {
              value: 'blah',
              label: 'blah',
              __typename: 'availableFileTypes'
            }
          ],
          availableMeasurements: [
            {
              identifier: 'blah',
              label: 'blah',
              __typename: 'availableMeasurements'
            }
          ],
          availableMeters: [
            {
              id: '123',
              meterClassification: 'blah',
              meterDescription: 'blah',
              meterIdentifier: 'blah',
              meterType: 'blah',
              siteClassification: 'blah',
              siteName: 'blah',
              __typename: 'availableMeters'
            }
          ],
          availableTimeAggregationLevels: [
            {
              value: 'blah',
              label: 'blah',
              __typename: 'availableTimeAggregationLevels'
            }
          ],
          availableTimeZones: [
            {
              value: 'blah',
              label: 'blah',
              __typename: 'availableTimeZones'
            }
          ],
          availableAggregationLevels: [
            {
              label: 'blah',
              value: 'blah',
              __typename: 'availableAggregationLevels'
            }
          ],
          __typename: 'availableOptions',
          submitted: true
        }
      };
      apolloData.cache.writeQuery({
        query: getAvailableOptions,
        data: fakeData
      });

      return {
        availableOptions: fakeData,
        saveExportDataRequest: {
          NoResponse: null,
          __typename: 'saveExportDataRequest'
        }
      };
    }
  }
};
