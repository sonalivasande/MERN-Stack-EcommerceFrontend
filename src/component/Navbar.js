import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { useCart } from "react-use-cart";
import api from "../api/api";
import { useState } from "react";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const { totalItems } = useCart();

  const [itemByFilter, setItemByFilter] = useState();

  let user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();
  const Logout = () => {
    var userData = JSON.parse(localStorage.getItem("userDetails"));
    var itemsData = JSON.parse(localStorage.getItem("react-use-cart"));
    api.addcart.addcart({ userId: userData._id, items: itemsData });
    localStorage.clear();
    navigate("/");
  };

  // const SearchOnVal = (value) => {
  //   const lowercasedValue = value.toLowerCase().trim();
  //   if (lowercasedValue === "") {
  //     setItemByFilter(getCourses);
  //   } else {
  //     const filteredData = getCourses.filter((item) => {
  //       return Object.keys(item.title).some((key) =>
  //         item.title.toString().toLowerCase().includes(lowercasedValue)
  //       );
  //     });
  //     setItemByFilter(filteredData);
  //   }
  // };

  return (
    <Container>
      <Wrapper>
        {/* <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search Product" />
            <Search
              style={{ color: "gray", fontSize: 15 }}
              // onChange={() => SearchOnVal()}
            />
          </SearchContainer>
        </Left> */}
        <Center>
          <Logo>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              SHOPAHOLIC
            </Link>
          </Logo>
        </Center>
        <Right>
          {/* <MenuItem><Link to="/shop">Shop</Link></MenuItem> */}
          <NavDropdown title="Shop" id="basic-nav-dropdown">
          <NavDropdown.Item href="/shopall">Shop All</NavDropdown.Item>
            <NavDropdown.Item href="/womenshop">Women Fashion</NavDropdown.Item>
            <NavDropdown.Item href="/menshop">Men Fashion</NavDropdown.Item>
            <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
          </NavDropdown>
          {/* <MenuItem><Link to="/login">Login</Link></MenuItem> */}
          {/* <Nav.Link href="/login" id="basic-nav-dropdown">Login</Nav.Link> */}
          {/* <Nav.Link href="/register" id="basic-nav-dropdown">Register</Nav.Link> */}

          {localStorage.getItem("userDetails") ? (
            <Nav>
              <NavDropdown
                title={user && user.username}
                id="basic-nav-dropdown"
              >
                {/* <NavDropdown.Item onClick={() => Logout}>Logout</NavDropdown.Item> */}
                <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav.Link href="/login" id="basic-nav-dropdown">
              Login
            </Nav.Link>
          )}

          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={totalItems} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
