import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import api from "../../api/api";
import { womenProducts } from "../../data";
import WomenProduct from "./WomenProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const WomenProducts = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getsortProductData(data) {
      var Data = Number(data);
      api.sortproductget
        .sortproductget({ productCategory: "Women", sort: Data })
        .then((result) => {
          console.log(result);
          setWomenList(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  })); //sort product api integration finished

  const [womenList, setWomenList] = useState([]);

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
          // return Object.keys(item.productCategory).some((key) =>
          // item.productCategory.toString().toLowerCase().includes(lowercasedValue)
          // );
          if (item.productCategory === "Women") {
            // item.id = item._id;
            // item.price = item.productPrice;
            return item;
          }
        });
        setWomenList(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      {womenList.map((item) => (
        item.id = item._id,
        item.price = item.productPrice,
        <WomenProduct item={item} key={item.id} />
      ))}
    </Container>
  );
});
export default WomenProducts;
