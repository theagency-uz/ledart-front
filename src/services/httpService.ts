import { strapiUrl } from "@/utils/endpoints";
import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) {
    return Promise.reject(error);
  }
  return Promise.reject(error);
});
function setJwt(jwt: string) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJwt,
};

// const strapi = {
//   get: axios.get,
//   post: axios.post,
//   put: axios.put,
//   patch: axios.patch,
//   delete: axios.delete,
//   setJwt,
// };

export const strapi = axios.create({
  baseURL: strapiUrl,
});

export default http;

export const tokenKey = "ledart_auth_token";
