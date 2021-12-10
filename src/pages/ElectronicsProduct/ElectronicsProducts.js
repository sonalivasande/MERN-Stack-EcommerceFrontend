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
          if (item.productCategory === "Electronics") {
            return item;
          }
        });
        console.log("filteredData=", filteredData);

        setElectronicsList(filteredData)
      })
      .catch((error) => {
        // console.log("getProductData err=====", error);
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
