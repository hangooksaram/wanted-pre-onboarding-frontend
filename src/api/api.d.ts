export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface SignData {
  email: string;
  password: string;
}

export interface CommonApiResponse {
  status: number;
  errorMessage?: string;
}

export interface SignApiResponse extends CommonApiResponse {
  data?: {
    access_token: string;
  };
}

export interface TodoWriteApiResponse extends CommonApiResponse {
  data?: Todo;
}

export interface TodoReadApiResponse extends CommonApiResponse {
  data?: Todo[];
}
