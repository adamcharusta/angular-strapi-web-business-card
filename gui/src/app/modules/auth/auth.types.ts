export type LoginRequestType = {
  identifier: string;
  password: string;
};

export type UserType = {
  id: number;
  username: string;
  email: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
  blocked: boolean;
  confirmed: boolean;
};

export type LoginResponseType = {
  jwt: string;
  user: UserType;
};
