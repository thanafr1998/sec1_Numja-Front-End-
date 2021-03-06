export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignUpCredentials {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  address: string;
  gender: UserGender;
  ssin: string;
  role: UserRole;
}

export interface LoginState {
  fetchingLogin: boolean;
  error: boolean;
  token: string | null;
  user: User | null;
}

export interface User {
  _id: string;
  username?: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: UserStatus;
  verified: boolean;
  gender: UserGender;
  birthDate: Date;
  credit: number;
  email: string;
  address: string;
  ssin: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  Student = "student",
  Tutor = "tutor",
  Admin = "admin"
}

export enum UserStatus {
  Active = "active",
  Suspended = "suspended"
}

export enum UserGender {
  Male = "male",
  Female = "female"
}

export enum LoginGetters {
  isLogin = "isLogin",
  isFetchingLogin = "isFetchingLogin",
  user = "user"
}

export enum LoginMutations {
  setToken = "setToken",
  setFetchingLogin = "setFetchingLogin",
  setError = "setError",
  setUser = "setUser"
}

export enum LoginActions {
  login = "login",
  logout = "logout",
  signUp = "signUp",
  redirect = "redirect",
  protectedRedirect = "protectedRedirect"
}
