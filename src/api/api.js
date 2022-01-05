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
    userget: (Logindata) =>
      axios
        .post(BASE_URL + "/user", Logindata,{
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          return result.data;
        }),
  },
  productgetbyid: {
    productgetid: (id) =>
      axios
        .get(BASE_URL + `/product/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          return result.data;
        }),
  },
  productget: {
    productget: (data) =>
      axios
        .post(BASE_URL + "/product",data, {
          headers: {
                     "Content-Type": "application/json",
               }
        })
        .then((result) => {
          return result.data;
        }),
  },
  sortproductget: {
    sortproductget: (data) =>
      axios
        .post(BASE_URL + "/product/sortProduct",data, {
          headers: {
                     "Content-Type": "application/json",
               }
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

addcart: {
  addcart: (data) =>
    axios
      .post(BASE_URL + "/cart/addCart", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(data)
          // console.log("order=", data);
          // console.log("order result=", result);
        return result.data;
      }),
},
getcart: {
  getcart: (data) =>
    axios
      .post(BASE_URL + "/cart/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(data)
          // console.log("order=", data);
          // console.log("order result=", result);
        return result.data;
      }),
},
}

