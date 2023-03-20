export interface LoginResult {
  userId: string;
  result: string;
  token?: string;
  message: string;
  role: string
  username: string
  dob: string
}

export interface RegisterResult {
  result: string;
  token?: string;
  message: string;
}
