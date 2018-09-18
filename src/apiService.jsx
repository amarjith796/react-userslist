import axios from "axios";

export default function ApiService(url) {
  return axios
    .get(url)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
}
