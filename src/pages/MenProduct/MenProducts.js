import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import { menProducts } from "../../data";
import Product from "./MenProduct";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = () => {
const [menList, setMenList] = useState([]);

useEffect(() => {
  getProductData();
}, []);

const getProductData = () => {
  api.productget
    .productget()
    .then((result) => {
      if (result.status) {
      }
      const filteredData = result.filter((item) => {
        if (item.productCategory === "Men") {
          item.id = item._id;
          item.price = item.productPrice;
          return item;
        }
      });
      setMenList(filteredData);
    })
    .catch((error) => {
      console.log(error);
    });
};
return (
  <Container>
    {menList.map((item) => (
      <Product item={item} key={item.id} />
    ))}
  </Container>
);
};

export default Products;
