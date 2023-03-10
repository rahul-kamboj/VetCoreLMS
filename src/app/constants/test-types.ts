import { ISample } from '../models/sample.model';

export const testTypes = <ISample[]>[
  {
    id: '1',
    name: 'CBCDOg',
    tests: [
      {
        id: '1',
        testName: 'Total Protein (Biuret, End Point)',
        units: 'gm/dl',
        lowRangeValue: '5.4',
        highRangeValue: '7.3'
      },
      {
        id: '2',
        testName: 'Albumin',
        units: 'gm/dl',
        lowRangeValue: '2.4',
        highRangeValue: '3.8'
      },
      {
        id: '3',
        testName: 'Globulinsadf ',
        units: 'gm/dl',
        lowRangeValue: '2.4',
        highRangeValue: '4.7'
      },
    ],
  },
  {
    id: '2',
    name: 'CBCDsadfasOg',
    tests: [
      {
        id: '1',
        testName: 'Total Protein (Biuret, End Point)',
        units: 'gm/dl',
        lowRangeValue: '5.4',
        highRangeValue: '7.3'
      },
      {
        id: '2',
        testName: 'Albumin (Bromocresol Green,End Point)',
        units: 'gm/dl',
        range: '2.4-3.8',
        lowRangeValue: '5.4',
        highRangeValue: '7.3'
      },
      {
        id: '3',
        testName: 'Globulin (Calculated)',
        units: 'gm/dl',
        range: '2.4-4.7',
        lowRangeValue: '5.4',
        highRangeValue: '7.3'
      },
    ],
  },
];
