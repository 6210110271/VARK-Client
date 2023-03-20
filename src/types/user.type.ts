export interface User_regis {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  dob: string;
  
}

export interface User_login {
  username: string;
  password: string;
}

export interface User {
  userId: number,
  username: string,
  fullname: string,
  dob: string,
  status: string
}

