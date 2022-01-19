import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import styled from "styled-components";
import api from "../api/api";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { mobile } from "../responsive";
import RatingReview from "./Rating/RatingReview";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Count = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductView = () => {
  const [singleProduct, setSingleProduct] = useState({});

  const [itemCount, setItemCount] = useState(0);

  const { updateItemQuantity, addItem } = useCart();

  const params = useParams();

  useEffect(() => {
    api.productgetbyid
      .productgetid(params.id)
      .then((result) => {
        let res = result
        res.id = res._id;
        res.price = res.productPrice;
        res.quantity = 0;
        // console.log("after", res);
        setSingleProduct(res);
      })
      .catch((error) => {});
  }, [params]);

  useEffect(() => {
    //   console.log("singleProduct=",singleProduct)
  }, [singleProduct])

  return (
    <Container>
      <Navbar />
      <Announcement />
      {/* <Button onclick="window.history.go(-1); return false;">Go Back</Button> */}
      {/* <button onClick={() => window.history.back()}>Go Back</button> */}
      <Wrapper>
        <ImgContainer>
          <Image src={singleProduct.productImage} />
        </ImgContainer>
        <InfoContainer>
          {/* {productList.map(item => <Title key={item.id}>{item.productName}</Title>)} */}
          <Title>{singleProduct.productName}</Title>
          <Desc>{singleProduct.productDiscription}</Desc>
          <Price>₹ {singleProduct.productPrice}</Price>
          {/* <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
            </Filter>
            </FilterContainer> */}
          <AddContainer>
            {/* <AmountContainer>
              <Remove onClick={() => updateItemQuantity(singleProduct.id, singleProduct.quantity - 1)}/>
              <Count>{singleProduct.quantity}</Count>
              <Add onClick={() => updateItemQuantity(singleProduct.id, singleProduct.quantity  + 1)}/>
            </AmountContainer> */}
            <Button onClick={() => addItem(singleProduct)}>Add To Cart</Button>
          </AddContainer>
          <RatingReview item={singleProduct}/>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductView;
