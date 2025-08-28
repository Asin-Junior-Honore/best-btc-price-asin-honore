export interface BitcoinPrice {
  exchange: string;
  Symbol: string;
  Price: number;
  Currency: string;
  timestamp: string;
}

export interface ApiResponse {
  data: BitcoinPrice[];
  loading: boolean;
  error: string | null;
}