export interface ISample {
  id: string;
  name: string;
  displayName: string;
  parameters: ITestParameter[];
  interpretations?: IInterpretation[];
  comments: string;
  parametersWithoutRange?: ITestParameterWithoutRange[];
}

export interface ITestParameter {
  id: string;
  name: string;
  isHeading?: boolean;
  units: string;
  lowRangeValue: string;
  highRangeValue: string;
  result: string;
}

export interface ITestParameterWithoutRange {
  id: string;
  name: string;
  isHeading?: boolean;
  result: string;
}

export interface IInterpretation {
  id: string;
  name: string;
  isHeading?: boolean;
  result: string;
  expectedResult: string;
}
