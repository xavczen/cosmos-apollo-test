import 'babel-polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));

configure({ adapter: new Adapter() });

(window as any).settingsForDataExport = {
  baseURL: 'whatever.energylink.io'
};

/* tslint:disable:object-literal-sort-keys */
(window as any).I18n = {
  defaultLocale: 'en',
  defaultSeparator: '.',
  fallbacks: false,
  locale: 'en',
  placeholder: {},
  translations: {
    en: {
      date: {
        abbr_day_names: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        abbr_month_names: [
          null,
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        day: 'Day',
        day_names: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        formats: {
          moment_formats: {
            standard_date: 'DD/MM/YYYY'
          }
        }
      },
      customer: {
        data_export: {
          aggregation: {
            all: 'All',
            nil: 'None',
            site: 'Site'
          },
          file_type: {
            csv: 'CSV',
            nem12: 'NEM12',
            json: 'JSON'
          },
          time_aggregation: {
            calendar_day: 'Calendar day',
            calendar_month: 'Calendar month',
            calendar_week: 'Calendar week',
            calendar_year: 'Calendar year',
            minutes_30: '30 minutes'
          },
          data_junction: {
            title: 'Data Junction',
            data_requests_table: {
              request_date: 'Request Date',
              measurement_stream: 'Measurement Stream',
              details: 'Data Export Details',
              requested_by: 'Requested By',
              download: 'Download',
              status: 'Status',
              link_expiry: 'Link Expiry'
            }
          },
          request_data: {
            title: 'Data Exporter',
            submit_form: 'Request Data',
            loading: 'Loading...',
            important_information: {
              overview:
                'We understand how important your data is to make important decisions. Our handy data exporter keeps your data in easy reach.',
              title: 'What to expect',
              key_points: [
                'Depending on how many measurement streams you have chosen, it may take up to 4 hours for your data to be ready',
                'Once your data is ready, it will be found in the Data Junction and an email will be sent to notify you',
                'Your files in the Data Junction will be available for 30 days before expiring',
                'To safeguard your data, only members of your EnergyLink account can access the Data Junction.'
              ]
            },
            select_meters: {
              meter_description: 'Description',
              meter_identifier: 'Meter No.',
              meter_type: 'Meter Type',
              meter_classification: 'Meter Classification',
              site: 'Site',
              site_classification: 'Site Classification',
              title: 'Step 1: Choose Meters'
            },
            select_measurement: {
              title: 'Step 2: Select Measurements',
              information:
                'A separate file will be generated for each measurement stream'
            },
            data_export_parameters: {
              title: 'Step 3: Data Export Parameters',
              aggregation_level: {
                title: 'Aggregation Level'
              },
              date_range: {
                title: 'Date Range for Export',
                start: 'Start',
                end: 'End',
                error: "Don't forget to choose a start and end date"
              },
              file_type: {
                title: 'File Type'
              },
              time_aggregation: {
                title: 'Time Measurement'
              },
              time_zone: {
                title: 'Timezone'
              }
            },
            submitted: {
              title: 'Your Data is Being Prepared',
              next_steps_title:
                'All good things take time. The next steps are:',
              next_steps: [
                'Depending on how many measurement streams you have chosen, it may take up to 4 hours for your data to be ready',
                'Once your data is ready, it will be found in the Data Junction and an email will be sent to notify you',
                'Your files in the Data Junction will be available for 30 days before expiring',
                'To safeguard your data, only members of your EnergyLink account can access the Data Junction.'
              ],
              actions: {
                continue_exporting: 'Continue Exporting Data',
                go_to_data_junction: 'Take me to the Data Junction',
                invite_colleagues: 'Invite colleagues to EnergyLink'
              }
            }
          }
        }
      }
    }
  },
  missingBehaviour: 'message',
  missingTranslationPrefix: '',
  locales: {},
  pluralization: {}
};
