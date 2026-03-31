export interface RequestConfig {
  showError?: boolean;
  showLoading?: boolean;
}

export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

export type HttpMethod = "get" | "post" | "put" | "delete";
