export interface IMeterDetails {
  meterClassification: string;
  id: number;
  meterDescription: string;
  meterIdentifier: string;
  siteName: string;
  meterType: string;
  selected?: boolean;
}

export interface IMeasurementTypeDetails {
  label: string;
  identifier: string;
  selected?: boolean;
}

export interface IFileType {
  value: string;
  label: string;
}

export interface IAggregationLevel {
  value: string;
  label: string;
}

export interface ITimeAggregation {
  value: string;
  label: string;
}

export interface ITimeZone {
  value: string;
  label: string;
}

export interface IDateRange {
  startDate: Date;
  endDate: Date;
}

export interface IDataExport {
  id: number;
  request_date: Date;
  requested_by: string;
  measurement_stream: string;
  details: string;
  link_expiry: Date;
  status: string;
  download_url: string;
}
