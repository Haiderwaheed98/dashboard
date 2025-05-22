export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface ApiError {
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: ApiError;
}

export interface PostFormData {
  title: string;
  body: string;
} 