import axios, { Method } from "axios";
import { HOST, PORT } from "../../config/http";
interface PostConfig {
  url: string;
  data: object;
}
const BASEURL = "/api";
const TIMEOUT = 5000;
function createPost(config: PostConfig) {
  let newHttpReq = axios.create({
    baseURL: BASEURL,
    timeout: TIMEOUT,
    method: "POST",
    data: config.data,
  });
  return newHttpReq(config);
}

function createGet(params: object) {
  let newHttpReq = axios.create({
    baseURL: BASEURL,
    timeout: TIMEOUT,
    params: params,
  });
  return newHttpReq;
}


export { createPost, createGet };
