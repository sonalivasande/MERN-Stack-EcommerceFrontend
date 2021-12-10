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
    // console.log("inside getProductData");
    api.productget
      .productget()
      .then((result) => {
        // console.log("getProductData =", result);
        if (result.status) {
        }
        const filteredData = result.filter((item) => {
          // return Object.keys(item.productCategory).some((key) =>
          // item.productCategory.toString().toLowerCase().includes(lowercasedValue)
          // );
          if (item.productCategory === "Men") {
            return item;
          }
        });
        console.log("filteredData=", filteredData);

        setMenList(filteredData)
      })
      .catch((error) => {
        // console.log("getProductData err=====", error);
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
