import {User} from "../../objects/user";

export interface PostLogin {
  user: User,
  token: string;
}
