import { createPost, createGet } from "../utils/http/index";
import axios from "axios";
import { LoginInfo } from "../store/module/types";
interface UserInfo {
  username: string;
  password: string;
}
interface GetReq {
  url: string;
  params: object;
}

function login(userInfo: UserInfo, success: Function, faild: Function) {
  createPost({
    url: "login",
    data: {
      username: userInfo.username,
      password: userInfo.password,
    },
  })
    .then((res) => {
      success(res);
    })
    .catch((err) => faild(err));
}

function loginP(loginInfo: LoginInfo) {
  return createPost({
    url: "login",
    data: loginInfo,
  });
}

function register(userInfo: UserInfo, success: Function, faild: Function) {
  createPost({
    url: "register",
    data: {
      username: userInfo.username,
      password: userInfo.password,
    },
  })
    .then((res) => {
      success(res);
    })
    .catch((err) => faild(err));
}

function loginTest() {
  axios({
    method: "post",
    url: "/api/login",
    data: {
      name: "jky4",
      password: "12345",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getReq(req: GetReq) {
  createGet({
    url: req.url,
    method: "GET",
  });
}

export { login, getReq, loginTest, register, loginP };
