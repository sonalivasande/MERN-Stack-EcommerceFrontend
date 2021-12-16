import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import ElectronicsProduct from "./ElectronicsProduct";

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const ElectronicProducts = () => {

const [electronicsList, setElectronicsList] = useState([]);

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
        if (item.productCategory === "Electronics") {
          item.id = item._id;
          item.price = item.productPrice;
          return item;
        }
      });
      setElectronicsList(filteredData);
    })
    .catch((error) => {
      console.log(error);
    });
};
return (
  <Container>
    {electronicsList.map((item) => (
      <ElectronicsProduct item={item} key={item.id} />
    ))}
  </Container>
);
};

export default ElectronicProducts;
