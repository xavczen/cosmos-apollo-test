import gql from 'graphql-tag';

export default gql`
  query getDataExports {
    dataExports
      @rest(type: "ExportDataRequest", path: "api/v1/exports", method: "GET") {
      id
      request_date
      requested_by
      measurement_stream
      details
      link_expiry
      status
      download_url
    }
  }
`;
