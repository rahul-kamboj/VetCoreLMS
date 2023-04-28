import { ISample } from '../models/sample.model';

export const TESTTYPES = <ISample[]>[
  {
    id: '1',
    name: 'COMPLETE BLOOD COUNT(DOG)',
    displayName: 'Complete Blood Count(DOG)',
    comments: "CBC done on fully automated Byovet Smart - 3DX.",
    parameters: [
      {
        id: '1',
        name: 'Haemoglobin',
        units: 'gm%',
        lowRangeValue: '12',
        highRangeValue: '18'
      },
      {
        id: '2',
        name: 'R.B.C. Count',
        units: 'x 106/ cu.mm',
        lowRangeValue: '5.5',
        highRangeValue: '9.5'
      },
      {
        id: '3',
        name: 'PCV',
        units: '%',
        lowRangeValue: '37',
        highRangeValue: '55'
      },
      {
        id: '4',
        name: 'MCV',
        units: 'fl',
        lowRangeValue: '60',
        highRangeValue: '77'
      },
      {
        id: '5',
        name: 'MCH',
        units: 'pg',
        lowRangeValue: '19.5',
        highRangeValue: '24.5'
      },
      {
        id: '6',
        name: 'MCHC',
        units: 'g/dl',
        lowRangeValue: '31',
        highRangeValue: '34'
      },
      {
        id: '7',
        name: 'W.B.C. Count',
        units: 'x 103 / cu mm',
        lowRangeValue: '6',
        highRangeValue: '17'
      },
      {
        id: '8',
        name: 'RDW CV',
        units: '%',
        lowRangeValue: '11.5',
        highRangeValue: '16.5'
      },
      {
        id: '9',
        name: 'Platelet Count',
        units: '(lacs / cu mm)',
        lowRangeValue: '2',
        highRangeValue: '8'
      },
      {
        id: '10',
        name: 'DIFFERENTIAL COUNT(DLC)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '11',
        name: 'Neutrophils',
        units: '%',
        lowRangeValue: '60',
        highRangeValue: '77'
      },
      {
        id: '12',
        name: 'Lymphocytes',
        units: '%',
        lowRangeValue: '12',
        highRangeValue: '30'
      },
      {
        id: '13',
        name: 'Eosinophils',
        units: '%',
        lowRangeValue: '3',
        highRangeValue: '10'
      },
      {
        id: '14',
        name: 'Monocytes',
        units: '%',
        lowRangeValue: '2',
        highRangeValue: '10'
      },
      {
        id: '15',
        name: 'Basophils',
        units: '%',
        lowRangeValue: '0',
        highRangeValue: '1'
      }
    ],
    interpretations: [
      {
        id: '1',
        name: 'PERIPHERAL SMEAR',
        isHeading: true,
        result: ''
      },
      {
        id: '2',
        name: 'RBC(Staining & Microscopy)',
        result: 'Normocytic Normochromic',
        expectedResult: 'Normocytic Normochromic'
      },
      {
        id: '3',
        name: 'WBC(Staining & Microscopy)',
        result: 'WBC’s are adequate',
        expectedResult: 'WBC’s are adequate'
      },
      {
        id: '4',
        name: 'Platelets(Staining & Microscopy)',
        result: 'Adequate',
        expectedResult: 'Adequate'
      },
      {
        id: '5',
        name: 'Parasites(Staining & Microscopy)',
        result: 'Not Seen',
        expectedResult: 'Not Seen'
      }
    ]
  },
  {
    id: '2',
    name: 'COMPLETE BLOOD COUNT(CAT)',
    displayName: 'Complete Blood Count(CAT)',
    comments: "CBC done on fully automated Byovet Smart - 3DX.",
    parameters: [
      {
        id: '1',
        name: 'Haemoglobin',
        units: 'gm%',
        lowRangeValue: '9.3',
        highRangeValue: '15.9'
      },
      {
        id: '2',
        name: 'R.B.C. Count',
        units: 'x 106/ cu.mm',
        lowRangeValue: '5.92',
        highRangeValue: '9.93'
      },
      {
        id: '3',
        name: 'PCV',
        units: '%',
        lowRangeValue: '29',
        highRangeValue: '48'
      },
      {
        id: '4',
        name: 'MCV',
        units: 'fl',
        lowRangeValue: '37',
        highRangeValue: '61'
      },
      {
        id: '5',
        name: 'MCH',
        units: 'pg',
        lowRangeValue: '11',
        highRangeValue: '21'
      },
      {
        id: '6',
        name: 'MCHC',
        units: 'g/dl',
        lowRangeValue: '30',
        highRangeValue: '38'
      },
      {
        id: '7',
        name: 'W.B.C. Count',
        units: 'x 103 / cu mm',
        lowRangeValue: '6',
        highRangeValue: '17'
      },
      {
        id: '8',
        name: 'RDW CV',
        units: '%',
        lowRangeValue: '5.5',
        highRangeValue: '19.5'
      },
      {
        id: '9',
        name: 'Platelet Count',
        units: '(lacs / cu mm)',
        lowRangeValue: '1.5',
        highRangeValue: '8.0'
      },
      {
        id: '10',
        name: 'DIFFERENTIAL COUNT(DLC)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '11',
        name: 'Neutrophils',
        units: '%',
        lowRangeValue: '35',
        highRangeValue: '79'
      },
      {
        id: '12',
        name: 'Lymphocytes',
        units: '%',
        lowRangeValue: '11',
        highRangeValue: '52'
      },
      {
        id: '13',
        name: 'Eosinophils',
        units: '%',
        lowRangeValue: '1',
        highRangeValue: '15'
      },
      {
        id: '14',
        name: 'Monocytes',
        units: '%',
        lowRangeValue: '0',
        highRangeValue: '4'
      },
      {
        id: '15',
        name: 'Basophils',
        units: '%',
        lowRangeValue: '0',
        highRangeValue: '1'
      }
    ],
    interpretations: [
      {
        id: '16',
        name: 'PERIPHERAL SMEAR',
        isHeading: true
      },
      {
        id: '17',
        name: 'RBC(Staining & Microscopy)',
        result: 'Normocytic Normochromic',
        expectedResult: 'Normocytic Normochromic'
      },
      {
        id: '18',
        name: 'WBC(Staining & Microscopy)',
        result: 'WBC’s are adequate',
        expectedResult: 'WBC’s are adequate'
      },
      {
        id: '19',
        name: 'Platelets(Staining & Microscopy)',
        result: 'Adequate',
        expectedResult: 'Adequate'
      },
      {
        id: '20',
        name: 'Parasites(Staining & Microscopy)',
        result: 'Not Seen',
        expectedResult: 'Not Seen'
      }
    ],
  },
  {
    id: '3',
    name: 'BIOCHEMISTRY OBSERVATION(DOG)',
    displayName: 'LFT & KFT(DOG)',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'KFT(Kidney Function Test)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'Blood Urea',
        units: 'mg/dl',
        lowRangeValue: '14',
        highRangeValue: '58'
      },
      {
        id: '3',
        name: 'Blood Urea Nitrogen',
        units: 'mg/dl',
        lowRangeValue: '7',
        highRangeValue: '27'
      },
      {
        id: '4',
        name: 'Creatinine',
        units: 'mg/dl',
        lowRangeValue: '0.5',
        highRangeValue: '1.8'
      },
      {
        id: '5',
        name: 'LFT(Liver Function Tests',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '6',
        name: 'Bilirubin(Total)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.9'
      },
      {
        id: '7',
        name: 'Bilirubin(Direct)',
        units: 'mg/dl',
        lowRangeValue: '0.1',
        highRangeValue: '0.4'
      },
      {
        id: '8',
        name: 'Indirect Bilirubin',
        units: 'mg/dl',
        lowRangeValue: '0',
        highRangeValue: '0.5'
      },
      {
        id: '9',
        name: 'SGPT(ALT)',
        units: 'U/L',
        lowRangeValue: '10',
        highRangeValue: '125'
      },
      {
        id: '10',
        name: 'SGOT(AST)',
        units: 'U/L',
        lowRangeValue: '0',
        highRangeValue: '50'
      },
      {
        id: '11',
        name: 'Alkaline Phosphatase(ALP)',
        units: 'U/L',
        lowRangeValue: '23',
        highRangeValue: '212'
      },
      {
        id: '12',
        name: 'Total Protein',
        units: 'gm/dl',
        lowRangeValue: '5.2',
        highRangeValue: '8.2'
      },
      {
        id: '13',
        name: 'Albumin',
        units: 'gm/dl',
        lowRangeValue: '2.3',
        highRangeValue: '4.0'
      },
      {
        id: '14',
        name: 'Globulin',
        units: 'gm/dl',
        lowRangeValue: '2.0',
        highRangeValue: '4.20'
      }
    ],
  },
  {
    id: '4',
    name: 'BIOCHEMISTRY OBSERVATION(DOG)',
    displayName: 'LFT & KFT(DOG) Extended',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'KFT(Kidney Function Test)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'Blood Urea',
        units: 'mg/dl',
        lowRangeValue: '14',
        highRangeValue: '58'
      },
      {
        id: '3',
        name: 'Blood Urea Nitrogen',
        units: 'mg/dl',
        lowRangeValue: '7',
        highRangeValue: '27'
      },
      {
        id: '4',
        name: 'Creatinine',
        units: 'mg/dl',
        lowRangeValue: '0.5',
        highRangeValue: '1.8'
      },
      {
        id: '5',
        name: 'Calcium',
        units: 'mg/dl',
        lowRangeValue: '7.9',
        highRangeValue: '12.0'
      },
      {
        id: '6',
        name: 'Phosphorus',
        units: 'mg/dl',
        lowRangeValue: '2.5',
        highRangeValue: '6.8'
      },
      {
        id: '7',
        name: 'LFT(Liver Function Tests',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '8',
        name: 'Bilirubin(Total)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.9'
      },
      {
        id: '9',
        name: 'Bilirubin(Direct)',
        units: 'mg/dl',
        lowRangeValue: '0.1',
        highRangeValue: '0.4'
      },
      {
        id: '10',
        name: 'Indirect Bilirubin',
        units: 'mg/dl',
        lowRangeValue: '0',
        highRangeValue: '0.5'
      },
      {
        id: '11',
        name: 'SGPT(ALT)',
        units: 'U/L',
        lowRangeValue: '10',
        highRangeValue: '125'
      },
      {
        id: '12',
        name: 'SGOT(AST)',
        units: 'U/L',
        lowRangeValue: '0',
        highRangeValue: '50'
      },
      {
        id: '13',
        name: 'Alkaline Phosphatase(ALP)',
        units: 'U/L',
        lowRangeValue: '23',
        highRangeValue: '212'
      },
      {
        id: '14',
        name: 'Total Protein',
        units: 'gm/dl',
        lowRangeValue: '5.2',
        highRangeValue: '8.2'
      },
      {
        id: '15',
        name: 'Albumin',
        units: 'gm/dl',
        lowRangeValue: '2.3',
        highRangeValue: '4.0'
      },
      {
        id: '16',
        name: 'Globulin',
        units: 'gm/dl',
        lowRangeValue: '2.0',
        highRangeValue: '4.20'
      }
    ],
  },
  {
    id: '5',
    name: 'BIOCHEMISTRY OBSERVATION(DOG)',
    displayName: 'LFT & KFT(DOG) Advance',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'KFT(Kidney Function Test)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'Blood Urea',
        units: 'mg/dl',
        lowRangeValue: '14',
        highRangeValue: '58'
      },
      {
        id: '3',
        name: 'Blood Urea Nitrogen',
        units: 'mg/dl',
        lowRangeValue: '7',
        highRangeValue: '27'
      },
      {
        id: '4',
        name: 'Creatinine',
        units: 'mg/dl',
        lowRangeValue: '0.5',
        highRangeValue: '1.8'
      },
      {
        id: '5',
        name: 'Calcium',
        units: 'mg/dl',
        lowRangeValue: '7.9',
        highRangeValue: '12.0'
      },
      {
        id: '6',
        name: 'Phosphorus',
        units: 'mg/dl',
        lowRangeValue: '2.5',
        highRangeValue: '6.8'
      },
      {
        id: '7',
        name: 'Uric Acid',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '1.0'
      },
      {
        id: '8',
        name: 'LFT(Liver Function Tests',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '9',
        name: 'Bilirubin(Total)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.9'
      },
      {
        id: '10',
        name: 'Bilirubin(Direct)',
        units: 'mg/dl',
        lowRangeValue: '0.1',
        highRangeValue: '0.4'
      },
      {
        id: '11',
        name: 'Indirect Bilirubin',
        units: 'mg/dl',
        lowRangeValue: '0',
        highRangeValue: '0.5'
      },
      {
        id: '12',
        name: 'SGPT(ALT)',
        units: 'U/L',
        lowRangeValue: '10',
        highRangeValue: '125'
      },
      {
        id: '13',
        name: 'SGOT(AST)',
        units: 'U/L',
        lowRangeValue: '0',
        highRangeValue: '50'
      },
      {
        id: '14',
        name: 'Alkaline Phosphatase(ALP)',
        units: 'U/L',
        lowRangeValue: '23',
        highRangeValue: '212'
      },
      {
        id: '15',
        name: 'Total Protein',
        units: 'gm/dl',
        lowRangeValue: '5.2',
        highRangeValue: '8.2'
      },
      {
        id: '16',
        name: 'Albumin',
        units: 'gm/dl',
        lowRangeValue: '2.3',
        highRangeValue: '4.0'
      },
      {
        id: '17',
        name: 'Globulin',
        units: 'gm/dl',
        lowRangeValue: '2.0',
        highRangeValue: '4.20'
      }
    ],
  },
  {
    id: '6',
    name: 'BIOCHEMISTRY OBSERVATION(CAT)',
    displayName: 'LFT & KFT(CAT)',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'KFT(Kidney Function Test)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'Blood Urea',
        units: 'mg/dl',
        lowRangeValue: '34',
        highRangeValue: '77'
      },
      {
        id: '3',
        name: 'Blood Urea Nitrogen',
        units: 'mg/dl',
        lowRangeValue: '16',
        highRangeValue: '36'
      },
      {
        id: '4',
        name: 'Creatinine',
        units: 'mg/dl',
        lowRangeValue: '0.8',
        highRangeValue: '2.4'
      },
      {
        id: '5',
        name: 'LFT(Liver Function Tests',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '6',
        name: 'Bilirubin(Total)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.9'
      },
      {
        id: '7',
        name: 'Bilirubin(Direct)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.4'
      },
      {
        id: '8',
        name: 'Indirect Bilirubin',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '075'
      },
      {
        id: '9',
        name: 'SGPT(ALT)',
        units: 'U/L',
        lowRangeValue: '12',
        highRangeValue: '130'
      },
      {
        id: '10',
        name: 'SGOT(AST)',
        units: 'U/L',
        lowRangeValue: '0',
        highRangeValue: '48'
      },
      {
        id: '11',
        name: 'Alkaline Phosphatase(ALP)',
        units: 'U/L',
        lowRangeValue: '14',
        highRangeValue: '111'
      },
      {
        id: '12',
        name: 'Total Protein',
        units: 'gm/dl',
        lowRangeValue: '5.7',
        highRangeValue: '8.9'
      },
      {
        id: '13',
        name: 'Albumin',
        units: 'gm/dl',
        lowRangeValue: '2.2',
        highRangeValue: '4.0'
      },
      {
        id: '14',
        name: 'Globulin',
        units: 'gm/dl',
        lowRangeValue: '2.5',
        highRangeValue: '4.9'
      }
    ],
  },
  {
    id: '7',
    name: 'BIOCHEMISTRY OBSERVATION(CAT)',
    displayName: 'LFT & KFT(CAT) Extended',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'KFT(Kidney Function Test)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'Blood Urea',
        units: 'mg/dl',
        lowRangeValue: '34',
        highRangeValue: '77'
      },
      {
        id: '3',
        name: 'Blood Urea Nitrogen',
        units: 'mg/dl',
        lowRangeValue: '16',
        highRangeValue: '36'
      },
      {
        id: '4',
        name: 'Creatinine',
        units: 'mg/dl',
        lowRangeValue: '0.8',
        highRangeValue: '2.4'
      },
      {
        id: '5',
        name: 'Calcium',
        units: 'mg/dl',
        lowRangeValue: '7.8',
        highRangeValue: '11.3'
      },
      {
        id: '6',
        name: 'Phosphorus',
        units: 'mg/dl',
        lowRangeValue: '3.1',
        highRangeValue: '7.5'
      },
      {
        id: '7',
        name: 'LFT(Liver Function Tests',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '8',
        name: 'Bilirubin(Total)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.9'
      },
      {
        id: '9',
        name: 'Bilirubin(Direct)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.4'
      },
      {
        id: '10',
        name: 'Indirect Bilirubin',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '075'
      },
      {
        id: '11',
        name: 'SGPT(ALT)',
        units: 'U/L',
        lowRangeValue: '12',
        highRangeValue: '130'
      },
      {
        id: '12',
        name: 'SGOT(AST)',
        units: 'U/L',
        lowRangeValue: '0',
        highRangeValue: '48'
      },
      {
        id: '13',
        name: 'Alkaline Phosphatase(ALP)',
        units: 'U/L',
        lowRangeValue: '14',
        highRangeValue: '111'
      },
      {
        id: '14',
        name: 'Total Protein',
        units: 'gm/dl',
        lowRangeValue: '5.7',
        highRangeValue: '8.9'
      },
      {
        id: '15',
        name: 'Albumin',
        units: 'gm/dl',
        lowRangeValue: '2.2',
        highRangeValue: '4.0'
      },
      {
        id: '16',
        name: 'Globulin',
        units: 'gm/dl',
        lowRangeValue: '2.5',
        highRangeValue: '4.9'
      }
    ],
  },
  {
    id: '8',
    name: 'BIOCHEMISTRY OBSERVATION(CAT)',
    displayName: 'LFT & KFT(CAT) Advance',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'KFT(Kidney Function Test)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'Blood Urea',
        units: 'mg/dl',
        lowRangeValue: '34',
        highRangeValue: '77'
      },
      {
        id: '3',
        name: 'Blood Urea Nitrogen',
        units: 'mg/dl',
        lowRangeValue: '16',
        highRangeValue: '36'
      },
      {
        id: '4',
        name: 'Creatinine',
        units: 'mg/dl',
        lowRangeValue: '0.8',
        highRangeValue: '2.4'
      },
      {
        id: '5',
        name: 'Calcium',
        units: 'mg/dl',
        lowRangeValue: '7.8',
        highRangeValue: '11.3'
      },
      {
        id: '6',
        name: 'Phosphorus',
        units: 'mg/dl',
        lowRangeValue: '3.1',
        highRangeValue: '7.5'
      },
      {
        id: '7',
        name: 'Uric Acid',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '1.0'
      },
      {
        id: '8',
        name: 'LFT(Liver Function Tests',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '9',
        name: 'Bilirubin(Total)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.9'
      },
      {
        id: '10',
        name: 'Bilirubin(Direct)',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '0.4'
      },
      {
        id: '11',
        name: 'Indirect Bilirubin',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '075'
      },
      {
        id: '12',
        name: 'SGPT(ALT)',
        units: 'U/L',
        lowRangeValue: '12',
        highRangeValue: '130'
      },
      {
        id: '13',
        name: 'SGOT(AST)',
        units: 'U/L',
        lowRangeValue: '0',
        highRangeValue: '48'
      },
      {
        id: '14',
        name: 'Alkaline Phosphatase(ALP)',
        units: 'U/L',
        lowRangeValue: '14',
        highRangeValue: '111'
      },
      {
        id: '15',
        name: 'Total Protein',
        units: 'gm/dl',
        lowRangeValue: '5.7',
        highRangeValue: '8.9'
      },
      {
        id: '16',
        name: 'Albumin',
        units: 'gm/dl',
        lowRangeValue: '2.2',
        highRangeValue: '4.0'
      },
      {
        id: '17',
        name: 'Globulin',
        units: 'gm/dl',
        lowRangeValue: '2.5',
        highRangeValue: '4.9'
      }
    ],
  },
  {
    id: '9',
    name: 'BIOCHEMISTRY OBSERVATION',
    displayName: 'Blood Glucose(Random)',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Blood Glucose(Random)',
        units: 'mg/dl',
        lowRangeValue: '60',
        highRangeValue: '120',
      }
    ],
  },
  {
    id: '10',
    name: 'BIOCHEMISRY OBSERVATIONS(DOG)',
    displayName: 'Amylase(Dog))',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Amylase',
        units: 'U/L',
        lowRangeValue: '500',
        highRangeValue: '1500'
      }
    ],
  },
  {
    id: '11',
    name: 'BIOCHEMISRY OBSERVATIONS(DOG)',
    displayName: 'Lipase(Dog)',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Lipase',
        units: 'U/L',
        lowRangeValue: '0',
        highRangeValue: '200'
      }
    ],
  },
  {
    id: '12',
    name: 'BIOCHEMISRY OBSERVATIONS(CAT)',
    displayName: 'Amylase(CAT))',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Amylase',
        units: 'U/L',
        lowRangeValue: '500',
        highRangeValue: '1500'
      }
    ],
  },
  {
    id: '13',
    name: 'BIOCHEMISRY OBSERVATIONS(CAT)',
    displayName: 'Lipase(CAT)',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Lipase',
        units: 'U/L',
        lowRangeValue: '7',
        highRangeValue: '80'
      }
    ],
  },
  {
    id: '14',
    name: 'BIOCHEMISRY CANINE ELECTROLYTE PROFILE',
    displayName: 'Dog Electrolyte',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Sodium(Na+)',
        units: 'mmol/l',
        lowRangeValue: '144',
        highRangeValue: '160'
      },
      {
        id: '2',
        name: 'Potassium(K+)',
        units: 'mmol/l',
        lowRangeValue: '3.5',
        highRangeValue: '5.8'
      },
      {
        id: '3',
        name: 'Chloride(Cl-)',
        units: 'mmol/l',
        lowRangeValue: '109',
        highRangeValue: '122'
      }
    ],
  },
  {
    id: '15',
    name: 'BIOCHEMISRY FELINE ELECTROLYTE PROFILE',
    displayName: 'Cat Electrolyte',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Sodium(Na+)',
        units: 'mmol/l',
        lowRangeValue: '150',
        highRangeValue: '165'
      },
      {
        id: '2',
        name: 'Potassium(K+)',
        units: 'mmol/l',
        lowRangeValue: '3.5',
        highRangeValue: '5.8'
      },
      {
        id: '3',
        name: 'Chloride(Cl-)',
        units: 'mmol/l',
        lowRangeValue: '112',
        highRangeValue: '129'
      }
    ],
  },
  {
    id: '16',
    name: 'BIOCHEMISRY OBSERVATIONS(DOG)',
    displayName: 'Phenobarbitone(DOG)',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Phenobarbitone',
        units: 'umol/L',
        lowRangeValue: '68',
        highRangeValue: '147'
      }
    ],
  },
  {
    id: '17',
    name: 'BIOCHEMISRY OBSERVATIONS',
    displayName: 'Ammonia',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'Plasma Ammonia',
        units: 'umol/L',
        lowRangeValue: '16',
        highRangeValue: '71'
      }
    ],
  },
  {
    id: '18',
    name: 'BIOCHEMISRY OBSERVATIONS(DOG)',
    displayName: 'LIPID Profile',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'LIPID PROFILE TEST',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'Total Cholestrol',
        units: 'mg/dl',
        lowRangeValue: '116',
        highRangeValue: '254'
      },
      {
        id: '3',
        name: 'HDL Cholestrol',
        units: 'mg/dl',
        lowRangeValue: '25',
        highRangeValue: '70'
      },
      {
        id: '4',
        name: 'Triglycerides',
        units: 'mg/dl',
        lowRangeValue: '26',
        highRangeValue: '291'
      },
      {
        id: '5',
        name: 'LDL',
        units: 'mg/dl',
        lowRangeValue: '0',
        highRangeValue: '160'
      }
    ],
  },
  {
    id: '19',
    name: 'BIOCHEMISRY CANINE SDMA TEST',
    displayName: 'CANINE SDMA',
    comments: 'Canine SDMA test done on IDEXX Catalyst One Chemistry Analyzer. <br/> Reference range taken from IDEXX Kit Insert.',
    parameters: [
      {
        id: '1',
        name: 'Canine SDMA (Symmetric Dimethylarginnie)',
        units: 'ug/dL',
        lowRangeValue: '0',
        highRangeValue: '14'
      }
    ],
  },
  {
    id: '20',
    name: 'BIOCHEMISTRY OBSERVATION',
    displayName: 'LFT & KFT(Turtle) Advance',
    comments: "Biochemistry done on Byovet Analyzer.",
    parameters: [
      {
        id: '1',
        name: 'KFT(Kidney Function Test)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'Blood Urea',
        units: 'mg/dl',
        lowRangeValue: '18.5',
        highRangeValue: '96'
      },
      {
        id: '3',
        name: 'Blood Urea Nitrogen',
        units: 'mg/dl',
        lowRangeValue: '0',
        highRangeValue: '34'
      },
      {
        id: '4',
        name: 'Creatinine',
        units: 'mg/dl',
        lowRangeValue: '0.10',
        highRangeValue: '1.60'
      },
      {
        id: '5',
        name: 'Calcium',
        units: 'mg/dl',
        lowRangeValue: '5.4',
        highRangeValue: '12.0'
      },
      {
        id: '6',
        name: 'Phosphorus',
        units: 'mg/dl',
        lowRangeValue: '2.9',
        highRangeValue: '10.6'
      },
      {
        id: '7',
        name: 'Uric Acid',
        units: 'mg/dl',
        lowRangeValue: '0.0',
        highRangeValue: '11.9'
      },
      {
        id: '8',
        name: 'LFT(Liver Function Tests',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '9',
        name: 'Bilirubin(Total)',
        units: 'mg/dl',
        lowRangeValue: '0.1',
        highRangeValue: '0.6'
      },
      {
        id: '10',
        name: 'Bilirubin(Direct)',
        units: 'mg/dl',
        lowRangeValue: '0.1',
        highRangeValue: '0.4'
      },
      {
        id: '11',
        name: 'Indirect Bilirubin',
        units: 'mg/dl',
        lowRangeValue: '0',
        highRangeValue: '0.3'
      },
      {
        id: '12',
        name: 'SGPT(ALT)',
        units: 'U/L',
        lowRangeValue: '0',
        highRangeValue: '37'
      },
      {
        id: '13',
        name: 'SGOT(AST)',
        units: 'U/L',
        lowRangeValue: '3',
        highRangeValue: '333'
      },
      {
        id: '14',
        name: 'Alkaline Phosphatase(ALP)',
        units: 'U/L',
        lowRangeValue: '43',
        highRangeValue: '1342'
      },
      {
        id: '15',
        name: 'Total Protein',
        units: 'gm/dl',
        lowRangeValue: '4.3',
        highRangeValue: '10.8'
      },
      {
        id: '16',
        name: 'Albumin',
        units: 'gm/dl',
        lowRangeValue: '1.9',
        highRangeValue: '5.30'
      },
      {
        id: '17',
        name: 'Globulin',
        units: 'gm/dl',
        lowRangeValue: '2.2',
        highRangeValue: '6.90'
      }
    ],
  },
  {
    id: '21',
    name: 'CANINE FREE THYROID PROFILE REPORT',
    displayName: 'Canine Free Thyroid Profile',
    comments: 'Throid test done on Vet automated FIA Analyzer',
    parameters: [
      {
        id: '1',
        name: 'Canine TSH',
        units: 'ng/ml',
        lowRangeValue: '0.0',
        highRangeValue: '0.50'
      },
      {
        id: '2',
        name: 'Canine Free tri-iodothyronine(fT3)',
        units: 'pmol/L',
        lowRangeValue: '1.2',
        highRangeValue: '8.2'
      },
      {
        id: '3',
        name: 'Canine Free thyroxine(fT4)',
        units: 'pmol/L',
        lowRangeValue: '9',
        highRangeValue: '39'
      },
    ],
    interpretations: [
      {
        id: '1',
        name: 'Interpretation',
        isHeading: true,
        result: ''
      },
      {
        id: '2',
        name: 'T4 (Thyroxine):',
        result: 'Decreased.',
        expectedResult: 'Decreased.'
      },
      {
        id: '3',
        name: 'Free Thyroxine (fT4):',
        result: 'With in Range',
        expectedResult: 'With in Range'
      }
    ]
  },
  {
    id: '22',
    name: 'CANINE THYROID PROFILE & fT4 REPORT',
    displayName: 'Canine Thyroid Profile & fT4',
    comments: 'Throid test done on Vet automated FIA Analyzer',
    parameters: [
      {
        id: '1',
        name: 'Canine T3(Tri-Iodothyronine)',
        units: 'nmol/L',
        lowRangeValue: '0.5',
        highRangeValue: '2.8'
      },
      {
        id: '2',
        name: 'Canine T4(Thyroxine)',
        units: 'nmol/L',
        lowRangeValue: '15',
        highRangeValue: '60'
      },
      {
        id: '3',
        name: 'Canine TSH',
        units: 'ng/ml',
        lowRangeValue: '0.0',
        highRangeValue: '0.50'
      },
      {
        id: '4',
        name: 'Canine Free thyroxine(fT4)',
        units: 'pmol/L',
        lowRangeValue: '9',
        highRangeValue: '39'
      },
    ],
    interpretations: [
      {
        id: '1',
        name: 'Interpretation',
        isHeading: true,
        result: ''
      },
      {
        id: '2',
        name: 'T3(Tri-Iodothyronine):',
        result: 'With in the range.',
        expectedResult: 'With in the range.'

      },
      {
        id: '2',
        name: 'T4 (Thyroxine):',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      },
      {
        id: '3',
        name: 'TSH:',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      },
      {
        id: '4',
        name: 'Free Thyroxine (fT4):',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      }
    ]
  },
  {
    id: '23',
    name: 'CANINE THYROID PROFILE REPORT',
    displayName: 'Canine Thyroid Profile',
    comments: 'Throid test done on Vet automated FIA Analyzer',
    parameters: [
      {
        id: '1',
        name: 'Canine T3(Tri-Iodothyronine)',
        units: 'nmol/L',
        lowRangeValue: '0.5',
        highRangeValue: '2.8'
      },
      {
        id: '2',
        name: 'Canine T4(Thyroxine)',
        units: 'nmol/L',
        lowRangeValue: '15',
        highRangeValue: '60'
      },
      {
        id: '3',
        name: 'Canine TSH',
        units: 'ng/ml',
        lowRangeValue: '0.0',
        highRangeValue: '0.50'
      }
    ],
    interpretations: [
      {
        id: '1',
        name: 'Interpretation',
        isHeading: true,
        result: ''
      },
      {
        id: '2',
        name: 'T3(Tri-Iodothyronine):',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      },
      {
        id: '2',
        name: 'T4 (Thyroxine):',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      },
      {
        id: '3',
        name: 'TSH:',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      }
    ]
  },
  {
    id: '24',
    name: 'CANINE fT4 & Total T4 REPORT',
    displayName: 'Canine fT4 & Total T4',
    comments: 'Throid test done on Vet automated FIA Analyzer',
    parameters: [
      {
        id: '1',
        name: 'Canine T4(Thyroxine)',
        units: 'nmol/L',
        lowRangeValue: '15',
        highRangeValue: '60'
      },
      {
        id: '2',
        name: 'Canine Free thyroxine(fT4)',
        units: 'pmol/L',
        lowRangeValue: '9',
        highRangeValue: '39'
      },
    ],
    interpretations: [
      {
        id: '1',
        name: 'Interpretation',
        isHeading: true,
        result: ''
      },
      {
        id: '2',
        name: 'T4 (Thyroxine):',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      },
      {
        id: '3',
        name: 'Free Thyroxine (fT4):',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      }
    ]
  },
  {
    id: '25',
    name: 'CANINE TOTAL T4 REPORT',
    displayName: 'Canine Total T4',
    comments: 'Throid test done on Vet automated FIA Analyzer',
    parameters: [
      {
        id: '1',
        name: 'Canine T4(Thyroxine)',
        units: 'pmol/L',
        lowRangeValue: '9',
        highRangeValue: '39'
      },
    ],
    interpretations: [
      {
        id: '1',
        name: 'Interpretation',
        isHeading: true,
        result: ''
      },
      {
        id: '2',
        name: 'Canine T4(Thyroxine):',
        result: 'With in the range.',
        expectedResult: 'With in the range.'
      }
    ]
  },
  {
    id: '26',
    name: 'CANINE PROGESTERONE HORMONE REPORT',
    displayName: 'Canine Progesterone',
    comments: 'Test done on Vet automated FIA Analyzer',
    parameters: [
      {
        id: '1',
        name: 'Canine Progesterone',  
        units: 'nmol/L',
        lowRangeValue: '',
        highRangeValue: 'anestrus: <3 <br> Posterus 15 days : 64-65 <br> Posterus 30 days : 25-51 <br> Posterus 60 days : 3-10'
      },
    ]
  },
  {
    id: '27',
    name: 'CLINICAL - PATHOLOGY ',
    displayName: 'Urine Routine',
    comments: 'Automated dipstick method & microscopy',
    parameters: [
      {
        id: '1',
        name: 'URINE COMPLETE EXAMINATION ',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '2',
        name: 'PHYSICAL EXAMINATION ',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '3',
        name: 'Appearance ',
        units: 'nmol/L',
        lowRangeValue: '',
        highRangeValue: 'Clear'
      },
      {
        id: '4',
        name: 'Color ',
        units: 'nmol/L',
        lowRangeValue: '',
        highRangeValue: 'Pale Yellow '
      },
      {
        id: '5',
        name: 'Quantity',
        units: 'nmol/L',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '6',
        name: 'Chemical Examination',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '7',
        name: 'Glucose',
        units: 'mg/dl',
        lowRangeValue: '',
        highRangeValue: 'Negative'
      },
      {
        id: '8',
        name: 'Ketone',
        units: 'mg/dl',
        lowRangeValue: '',
        highRangeValue: 'Negative'
      },
      {
        id: '9',
        name: 'Protein',
        units: 'mg/dl',
        lowRangeValue: '',
        highRangeValue: 'Negative'
      },
      {
        id: '1',
        name: 'Bilirubin',
        units: 'mg/dl',
        lowRangeValue: '',
        highRangeValue: 'Negative'
      },
      {
        id: '1',
        name: 'Urobilinogen',
        units: 'mg/dl',
        lowRangeValue: '',
        highRangeValue: 'Negative'
      },
      {
        id: '1',
        name: 'Occult Blood',
        units: 'Ery/uL',
        lowRangeValue: '',
        highRangeValue: 'Negative'
      },
      {
        id: '1',
        name: 'Nitrite',
        units: 'mg/dl',
        lowRangeValue: '',
        highRangeValue: 'Negative'
      },
      {
        id: '1',
        name: 'Specific Gravity',
        units: '-',
        lowRangeValue: '1.010',
        highRangeValue: '1.030'
      },

      {
        id: '1',
        name: 'PH',
        units: '-',
        lowRangeValue: '6.0',
        highRangeValue: '6.5'
      },
      {
        id: '1',
        name: 'Microscopic Examination',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '1',
        name: 'Red Blood Cells',
        units: '/HPF',
        lowRangeValue: '0',
        highRangeValue: '3'
      },
      {
        id: '1',
        name: 'White Blood Cells(Pus Cells)',
        units: '/HPF',
        lowRangeValue: '0',
        highRangeValue: '2'
      },
      {
        id: '1',
        name: 'Epithelial Cells',
        units: '/HPF',
        lowRangeValue: '0',
        highRangeValue: '3'
      },
      {
        id: '1',
        name: 'Crystals',
        units: '/HPF',
        lowRangeValue: '',
        highRangeValue: 'Absent'
      },
      {
        id: '1',
        name: 'Casts',
        units: '/HPF',
        lowRangeValue: '',
        highRangeValue: 'Absent'
      },
      {
        id: '1',
        name: 'Others',
        units: '  ',
        lowRangeValue: '',
        highRangeValue: 'Absent'
      }
    ]
  },
  {
    id: '28',
    name: 'FECAL (STOOL) ROUTINE EXAMINATION',
    displayName: 'Fecal (Stool)',
    comments: '',
    parametersWithoutRange: [
      {
        id: '1',
        name: 'PHYSICAL & CHEMICAL EXAMINATION',
        isHeading: true
      },
      {
        id: '1',
        name: 'Colour'
      },
      {
        id: '1',
        name: 'Consistency'
      },
      {
        id: '1',
        name: 'Mucus'
      },
      {
        id: '1',
        name: 'Occult Blood'
      },
      {
        id: '1',
        name: 'Others Findings'
      },
      {
        id: '1',
        name: 'MICROSCOPE EXAMINATION',
        isHeading: true
      },
      {
        id: '1',
        name: 'RBC/HPF'
      },
      {
        id: '1',
        name: 'PUS CELLS /HPF'
      },
      {
        id: '1',
        name: 'Ova'
      },
      {
        id: '1',
        name: 'Egg'
      },
      {
        id: '1',
        name: 'Cyst'
      },
      {
        id: '1',
        name: 'Amoeba'
      },
      {
        id: '1',
        name: 'Others Findings'
      }
    ]
  },
  {
    id: '29',
    name: 'COMPLETE BLOOD COUNT REPORT',
    displayName: 'Complete Blood Count Turtle',
    comments: 'CBC done manually',
    parameters: [
      {
        id: '1',
        name: 'Haemoglobin',
        units: 'gm%',
        lowRangeValue: '2.6',
        highRangeValue: '15.3'
      },
      {
        id: '2',
        name: 'R.B.C. Count',
        units: 'x 106/ cu.mm',
        lowRangeValue: '0.16',
        highRangeValue: '2.10'
      },
      {
        id: '3',
        name: 'PCV',
        units: '%'
      },
      {
        id: '4',
        name: 'MCV',
        units: 'fl'
      },
      {
        id: '5',
        name: 'MCH',
        units: 'pg',
        lowRangeValue: '84',
        highRangeValue: '208'
      },
      {
        id: '6',
        name: 'MCHC',
        units: 'g/dl'
      },
      {
        id: '7',
        name: 'W.B.C. Count',
        units: 'x 103 / cu mm',
        lowRangeValue: '0.88',
        highRangeValue: '22.6'
      },
      {
        id: '9',
        name: 'Platelet Count',
        units: '(lacs / cu mm)'
      },
      {
        id: '10',
        name: 'DIFFERENTIAL COUNT(DLC)',
        isHeading: true,
        units: '',
        lowRangeValue: '',
        highRangeValue: ''
      },
      {
        id: '11',
        name: 'Heterophils',
        units: '%',
        lowRangeValue: '09',
        highRangeValue: '52'
      },
      {
        id: '12',
        name: 'Lymphocytes',
        units: '%',
        lowRangeValue: '29',
        highRangeValue: '82'
      },
      {
        id: '13',
        name: 'Eosinophils',
        units: '%',
        lowRangeValue: '3',
        highRangeValue: '10'
      },
      {
        id: '14',
        name: 'Monocytes',
        units: '%',
        lowRangeValue: '2',
        highRangeValue: '19'
      },
      {
        id: '15',
        name: 'Basophils',
        units: '%',
        lowRangeValue: '0',
        highRangeValue: '1'
      }
    ]
  },
];
