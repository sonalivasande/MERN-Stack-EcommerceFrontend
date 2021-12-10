import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: e9f5f5;
    transform: scale(1.1);
  }
`;

const WomenProduct = ({ item }) => {
  const [cartItems, setCartItems] = useState([]);
  var userData = JSON.parse(localStorage.getItem("userDetails"));
  useEffect(() => {
    // console.log("itemmmmm", item);
  }, [item]);

  const addtocart = () => {
    console.log("adddddd");
  };
  const buynowfun = () => {
    // console.log("buy now",userData)
    console.log(item)
    var data = {
      // _id: userData._id,
      userId: userData._id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      emailId: userData.emailId,
      phoneNumber: userData.phoneNumber,
      productId: item._id,
      productName: item.productName,
      country: userData.country,
      state: userData.state,
      city: userData.city,
      pincode: userData.pincode,
      quantity: item.productQuantity,
      totalPrice: item.productPrice,
      productCategory: item.productCategory,
      productSubCategory: item.productCategorySubType,
      isAddedToCart: true,
      isClickedOnByNow: true,
      isProductLiked: false,
    };
    console.log("data==",data)
    api.order
      .createorder(data)
      .then((result) => {
        console.log("order api==", result);
        alert("Thank you! Your order placed successful!");
        // window.location.replace("/")
      })
      .catch((error) => {
        console.log("order err=====", error);
        alert("Something went wrong.");
      });
  };
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.productImage} />
      <Info>
        <div className="d-flex justify-content-center align-items-center h-100">
          <p className="text-white mb-0" style={{ fontWeight: "bold" }}>
            ₹ {item.productPrice}
          </p>
        </div>
        {/* <Icon data-toggle="tooltip" data-placement="bottom" title="Add to Cart" onClick={() => addtocart()}>
          <ShoppingCartOutlined />
        </Icon> */}
        <Icon
          data-toggle="tooltip"
          data-placement="bottom"
          title="Buy Now"
          onClick={() => buynowfun()}
        >
          <ShoppingCartOutlined />
        </Icon>
        {/* <Link><Icon><SearchOutlined /></Icon></Link> */}
        {/* <Icon><FavoriteBorderOutlined /></Icon> */}
      </Info>
    </Container>
  );
};

export default WomenProduct;
