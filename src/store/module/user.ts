// 存储登陆的用户信息和在线用户信息
import { defineStore } from "pinia";
import { LoginInfo, UserType } from "./types";
import { login, loginP } from "../../api/http";
import { store } from "../index";
import { getUserInfo, removeToken, setLoginUser } from "../../utils/auth";
import { storageLocal, storageSession } from "../../utils/storage";
import { useRouter } from "vue-router";

const userInfoData = getUserInfo();
let username = "";
let admin = false;

if (userInfoData) {
  const userInfo = JSON.parse(userInfoData);
  if (userInfo) {
    username = userInfo?.username;
    admin = userInfo?.admin ?? false;
  }
}
export const useUserStore = defineStore({
  // 容器名称ID，必须唯一Pinia会把所有的容器都挂载到根容器
  id: "mk-chat-user",
  // 存储用户信息状态
  state: (): UserType => ({
    username,
    admin,
  }),
  // 封装业务逻辑，修改state中的数据
  actions: {
    SET_USERNAME(username: string) {
      this.username = username;
    },
    SET_ADMIN(admin: boolean) {
      this.admin = admin;
    },
    /**
     * 使用用户信息登陆，并将用户信息保存到本地
     * @param loginInfo 登陆信息
     * @returns
     */
    async loginByUsername(loginInfo: LoginInfo) {
      return new Promise<void>((resolve, reject) => {
        loginP(loginInfo)
          .then((res) => {
            if (res.data) {
              // 将登陆信息保存到本地
              setLoginUser(res.data);
              resolve();
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    logOut() {
      this.username = "";
      this.admin = false;
      removeToken();
      storageLocal.clear();
      storageSession.clear();
      // 回到登陆页面
      useRouter().push("/login");
    },
  },
});

export function useUserStroeHook() {
  return useUserStore(store);
}
