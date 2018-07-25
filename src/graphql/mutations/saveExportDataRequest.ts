import gql from 'graphql-tag';

export default gql`
  mutation saveExportDataRequest($input: ExportDataRequest!) {
    saveExportDataRequest(input: $input)
      @rest(
        type: "ExportDataRequest"
        path: "api/v1/exports"
        method: "POST"
      ) {
      NoResponse
    }
  }
`;
