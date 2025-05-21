export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiError {
  message: string;
  status: number;
}

export interface ApiResponse<T> {
  data: T;
  error?: ApiError;
}

export interface PostFormData {
  title: string;
  body: string;
} 