export interface IUser {
  id: number;
  username: string;
  token: string;
  avatar?: string;
  email?: string;
}

export interface ITokenResult {
  expired_in: number;
  access_token: string;
}
