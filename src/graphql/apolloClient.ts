import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { RestLink } from 'apollo-link-rest';

import { IDataExport } from '../types/EnergyLinkDataTypes';

interface IDataExportList {
  dataExports: IDataExport[];
}

export default function generateClient(baseURL: string) {
  const restLink = new RestLink({
    uri: baseURL,
    credentials: 'same-origin',
    typePatcher: {
      AvailableOptions: (data: any) => {
        const processedData = Object.keys(data).reduce((result, keyName) => {
          const property = data[keyName];
          if (property && property.length) {
            result[keyName] = property.map((datum: any) => ({
              __typename: keyName,
              ...datum
            }));
          } else {
            result[keyName] = property;
          }
          return result;
        }, {});
        return processedData;
      },
      ExportDataRequest: (data: IDataExportList) => {
        return {
          ...data,
          __typename: 'dataExports'
        };
      }
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  });
}
