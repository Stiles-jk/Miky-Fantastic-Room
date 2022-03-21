import Cookies from "js-cookie";
import { UserType } from "../store/module/types";
import { useUserStroeHook } from "../store/module/user";

const TokenKey = "authorized-token";
type paramsMapType = {
  username: string;
  expires: number;
  accessToken: string;
};

export function getToken() {
  return Cookies.get(TokenKey);
}

/**
 *
 * @returns
 */
export function getUserInfo() {
  return Cookies.get("mk-chat-user");
}

// 设置token以及过期时间（cookies、sessionStorage各一份）
// 后端需要将用户信息和token以及过期时间都返回给前端，过期时间主要用于刷新token
// export function setToken(data: any) {
//   const { accessToken, expires, name } = data;
//   // 提取关键信息进行存储
//   const paramsMap: paramsMapType = {
//     username: "",
//     expires: Date.now() + parseInt(expires),
//     accessToken,
//   };
//   const dataString = JSON.stringify(paramsMap);
//   useUserStroeHook().SET_TOKEN(accessToken);
//   useUserStroeHook().SET_NAME(name);
//   expires > 0
//     ? Cookies.set(TokenKey, dataString, {
//         expires: expires / 86400000,
//       })
//     : Cookies.set(TokenKey, dataString);
//   sessionStorage.setItem(TokenKey, dataString);
// }

export function setLoginUser(userType: UserType) {
  useUserStroeHook().SET_USERNAME(userType.username);
  useUserStroeHook().SET_ADMIN(userType.admin);
}

// 登出
export function logout() {
  removeToken();
  Cookies.remove("userInfo");
  sessionStorage.removeItem("userInfo");
}

// 删除token
export function removeToken() {
  Cookies.remove(TokenKey);
  sessionStorage.removeItem(TokenKey);
}
