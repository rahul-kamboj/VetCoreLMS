export interface ISample {
  id: string;
  name: string;
  tests: ITest[];
  comments: string;
}

export interface ITest {
  id: string;
  testName: string;
  units: string;
  lowRangeValue: string;
  highRangeValue: string;
  result: string;
  up: string;
  down: string;
}
