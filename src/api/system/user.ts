import { LoginParams } from "./models/userModel";

enum Api {
  Login = "/login",
  Logout = "/logout",
  GetUserInfo = "/getUserInfo",
  GetPermCode = "/getPermCode",
  TestRetry = "/testRetry",
}

export const userLogin = (params: LoginParams) => {};
