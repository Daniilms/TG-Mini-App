export interface LinkT {
  pageNumber: string;
  parameters: ParametersT;
}

export interface ParametersT {
  pageName: string;
  pageUrl: string;
  id: string;
  isActive: boolean;
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

export interface BookDataT {
  logged_date: string;
  logged_edition: string;
  work: {
    title: string;
    key: string;
    first_publish_year: number;
    author_keys: string[];
    author_names: string[];
    cover_edition_key: string;
    cover_id: number;
    edition_key: string[];
    lending_edition_s: string;
  };
}
