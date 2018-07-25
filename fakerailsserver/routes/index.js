const express = require('express');
const router = express.Router();

router.post('/api/v1/exports', (req, res) => {
  res.json({ created: true });
});

router.get('/api/v1/exports', (req, res) => {
  res.json([
    {
      'worstPresidentEver': 'Trump'
    },
    {
      'dateOfImpeachment': 'nextMonth'
    }
  ]);
});

router.get('/api/v1/exports/options', (req, res) => {
  const EXAMPLE_METERS = [
    {
      id: 1233,
      meterClassification: 'General Power',
      meterDescription: 'MTB GTA',
      meterIdentifier: '23432423',
      meterType: 'Electricity Billing Meter',
      siteClassification: 'Watering hole',
      siteName: 'Abbotts Hotel'
    },
    {
      id: 1234,
      meterClassification: 'General Water',
      meterDescription: 'TSB GTA',
      meterIdentifier: '09234789324',
      meterType: 'Water Billing Meter',
      siteClassification: 'Watering hole',
      siteName: 'Abbotts Hotel'
    },
    {
      id: 1235,
      meterClassification: 'General Water',
      meterDescription: 'TSB GTA 2',
      meterIdentifier: '1246812',
      meterType: 'Water Non Billing Meter',
      siteClassification: 'Watering hole',
      siteName: 'Abbotts Hotel'
    },
    {
      id: 1236,
      meterClassification: 'General Power',
      meterDescription: 'MTB GTA',
      meterIdentifier: '23432423',
      meterType: 'Electricity Billing Meter',
      siteClassification: 'School',
      siteName: 'Hogwarts'
    },
    {
      id: 1237,
      meterClassification: 'General Water',
      meterDescription: 'TSB GTA',
      meterIdentifier: '09234789324',
      meterType: 'Water Billing Meter',
      siteClassification: 'School',
      siteName: 'Hogwarts'
    },
    {
      id: 1238,
      meterClassification: 'General Water',
      meterDescription: 'TSB GTA 2',
      meterIdentifier: '1246812',
      meterType: 'Water Non Billing Meter',
      siteClassification: 'School',
      siteName: 'Hogwarts'
    }
  ];

  const EXAMPLE_MEASUREMENTS = [
    { identifier: 'energy_consumed_kwh', label: 'Energy Consumed (kWh)' },
    { identifier: 'energy_generated_kwh', label: 'Energy Generated (kWh)' },
    { identifier: 'apparent_power_kva', label: 'Apparent Power (kVa)' },
    { identifier: 'real_power_kw', label: 'Real Power (kW)' },
    {
      identifier: 'real_power_consumed_kwh',
      label: 'Real Power Consumed (kWh)'
    },
    {
      identifier: 'real_power_generated_kwh',
      label: 'Real Power Generated (kWh)'
    },
    { identifier: 'current_a', label: 'Current (A)' },
    { identifier: 'water_kl', label: 'Water (kL)' }
  ];

  const SAMPLE_DATA_FROM_RAILS = {
    availableAggregationLevels: [
      { value: 'site', label: 'Site' },
      { value: 'all', label: 'All' },
      { value: 'nil', label: 'Nil' }
    ],
    availableFileTypes: [
      { value: 'csv', label: 'CSV' },
      { value: 'nem12', label: 'NEM12' },
      { value: 'json', label: 'JSON' }
    ],
    availableMeasurements: EXAMPLE_MEASUREMENTS,
    availableMeters: EXAMPLE_METERS,
    availableTimeAggregationLevels: [
      { value: '30_minutes', label: '30 Minutes' },
      { value: 'calendar_year', label: 'Calendar Year' },
      { value: 'calendar_month', label: 'Calendar Month' },
      { value: 'calendar_week', label: 'Calendar Week' },
      { value: 'calendar_day', label: 'Calendar Day' }
    ],
    availableTimeZones: [
      { value: 'Australia/Sydney', label: 'Australia/Sydney' },
      { value: 'Australia/Perth', label: 'Australia/Perth' }
    ],
    submitted: false
  };

  res.json(SAMPLE_DATA_FROM_RAILS);
});

module.exports = router;
