import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
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
  const Price = styled.div`
    align-items: center;
    justify-content: center;
  
    transition: all 0.5s ease;
  
    &:hover {
      background-color: e9f5f5;
      transform: scale(1.1);
    }
  `;
  const addtocart = () => {
    console.log("adddddd");
  };
  const ElectronicProduct = ({ item }) => {
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
          <Icon
            data-toggle="tooltip"
            data-placement="bottom"
            title="Add to Cart"
            onClick={() => addtocart()}
          >
            <ShoppingCartOutlined />
          </Icon>
          {/* <Icon to={`/productdetails/${item.id}`}><SearchOutlined /></Icon> */}
          {/* <Icon><FavoriteBorderOutlined /></Icon> */}
          {/* <Price>₹ {item.price}</Price> */}
        </Info>
      </Container>
    );
  };
  
  export default ElectronicProduct;
  