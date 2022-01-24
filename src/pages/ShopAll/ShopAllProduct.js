import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
    } from "@material-ui/icons";
    import { useEffect } from "react";
    import styled from "styled-components";
    import { useCart } from "react-use-cart";
    
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
    
    const ShopAllProduct = ({ item }) => {
    
    const { addItem } = useCart();
    
    var userData = JSON.parse(localStorage.getItem("userDetails"));
    
    useEffect(() => {}, [item]);
    
      const searchItem = (item) => {
        console.log(item);
        window.location.assign(`/product/${item._id}`);
      };

    return (
      <Container>
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
            onClick={() => addItem(item)}
          >
            <ShoppingCartOutlined />
          </Icon>
          <Icon onClick={() => searchItem(item)}><SearchOutlined /></Icon>
        </Info>
      </Container>
    );
    };
    
    export default ShopAllProduct;
    