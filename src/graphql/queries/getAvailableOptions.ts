import gql from 'graphql-tag';

export default gql`
  query getAvailableOptions {
    availableOptions @rest(type: "AvailableOptions", path: "api/v1/exports/options") {
      availableAggregationLevels {
        value
        label
      }
      availableFileTypes {
        value
        label
      }
      availableMeasurements {
        identifier
        label
      }
      availableMeters {
        id
        meterClassification
        meterDescription
        meterIdentifier
        meterType
        siteClassification
        siteName
      }
      availableTimeAggregationLevels {
        value
        label
      }
      availableTimeZones {
        value
        label
      }
      submitted
    }
  }
`;
