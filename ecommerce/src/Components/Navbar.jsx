import React, { Fragment } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  

  return (
    <Fragment>
      <Header>
        <Container>
          <Col>
            <Logo>Recco</Logo>

            <Navlist>
              <Navitem>Store</Navitem>
              <Navitem>Order</Navitem>
              <Navitem>Analytics</Navitem>
            </Navlist>
          </Col>

          <User>
            <Cart>
              <AiOutlineShoppingCart />
              <Count>5</Count>
            </Cart>

            <UserText>Hello, Bandan</UserText>
          </User>
        </Container>
      </Header>
    </Fragment>
  );


  
};

const Header = styled.nav`
    width: 100%;
    height: 55px;
    background-color: #0a713dde;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Col = styled.div`
    display: flex;
    align-items: center;
  `;
  const Container = styled.div`
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Logo = styled.a`
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
  `;
  const Navlist = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  `;

  const Navitem = styled.li`
    margin: 0 10px;
    color: white;
    font-weight: 500;
  `;
  const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 1.8rem;
    gap: 2;
    position: relative;
  `;

  const Cart = styled.div`
    position: relative;
  `;
  const Count = styled.div`
    background: red;
    font-size: 0.7rem;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    right: -4px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const UserText = styled.p`
    color: white;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 15px;
  `;

export default Navbar;
