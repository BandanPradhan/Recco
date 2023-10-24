import React, { Fragment } from "react";
import styled from "styled-components";

const TopNav = () => {
  const TopSection = styled.div`
    background-color: white;
    box-shadow: 2px 2px 7px 2px #9e9c9c;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Container = styled.div`
    width: 1100px;
    height: 100%;
    padding: 0.5rem;
  `;
  const BackButton = styled.button`
    background: transparent;
    border-radius: 20px;
    padding: 0.4rem 1rem;
    border: 1px solid #0a713dde;
    color: #0a713dde;
    font-size: 1rem;
    margin: 0rem 0.4rem;
  `;
  const ApprovedButton = styled.button`
    background: #0a713dde;
    border-radius: 20px;
    padding: 0.4rem 1rem;
    border: 1px solid green;
    color: white;
    font-size: 1rem;
  `;
  return (
    <Fragment>
      <TopSection>
        <Container>
          <h6>
            Order / <a href="#">Order 32457ABC</a>
          </h6>
          <div className="d-flex justify-content-between align-items-center">
            <div className="left-col">
              <h5>Order 32457ABC</h5>
            </div>
            <div className="right-col">
              <BackButton>Back</BackButton>
              <ApprovedButton>Approved Order</ApprovedButton>
            </div>
          </div>
        </Container>
      </TopSection>
    </Fragment>
  );
};

export default TopNav;
