import { useEffect, useRef } from "react";
import styled from "styled-components";
import Announcement from "../../component/Announcement";
import Navbar from "../../component/Navbar";
import ShopAllProducts from "./ShopAllProducts";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ShopAllProductList = () => {
  const childCompRef = useRef();
  var sortdata;
  const handleChange = (event) => {
    sortdata = event.target.value;
    if (sortdata == 1 || sortdata == -1) {
      childCompRef.current.getsortProductData(sortdata);
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Shop All</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select defaultValue={"DEFAULT"} onChange={handleChange}>
            <Option key="1" value="DEFAULT">
              Select
            </Option>
            <Option key="2" value="1">
              Price (Low to High)
            </Option>

            <Option key="3" value="-1">
              Price (High to Low)
            </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ShopAllProducts ref={childCompRef} />
    </Container>
  );
};

export default ShopAllProductList;

