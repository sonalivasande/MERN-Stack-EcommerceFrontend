import axios from "axios";
import BASE_URL from "./constants_api";

export default {
  usercrud: {
    createuser: (data) =>
      axios
        .post(BASE_URL + "/user/createUser", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
            // console.log(" signup data from api file", data);
            // console.log("signup result from api file==", result);
          return result.data;
        }),
  },
  login: {
    userget: () =>
      axios
        .get(BASE_URL + "/user", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          return result.data;
        }),
  },
  productget: {
    productget: () =>
      axios
        .get(BASE_URL + "/product", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          return result.data;
        }),
  },
  order: {
    createorder: (data) =>
      axios
        .post(BASE_URL + "/order/createOrder", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
            // console.log("order=", data);
            // console.log("order result=", result);
          return result.data;
        }),
  },
}
