export interface PostLogin {
  user: {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
  };
  token: string;
}
