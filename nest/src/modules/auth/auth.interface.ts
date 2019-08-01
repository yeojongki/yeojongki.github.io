export interface ITokenResult {
  token: string;
  expired: number;
}

export interface IAuth {
  username?: string;
  password?: string;
  token?: string;
}
