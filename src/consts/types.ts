export interface LinkT {
  pageNumber: string;
  parameters: ParametersT;
}

export interface ParametersT {
  pageName: string;
  pageUrl: string;
  id: string;
}

export interface ExchangeT {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
}
