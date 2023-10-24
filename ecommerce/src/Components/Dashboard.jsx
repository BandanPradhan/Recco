import React, { Fragment } from "react";
import styled from "styled-components";
import OrderTable from "./Table";

const Dashboard = () => {
  const Home = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;
  `;
  const Container = styled.div`
    width: 1100px;
  `;

  const OrderDetails = styled.div`
    background-color: #fofofof;
    border: 1px solid white;
    border-radius: 10px;

    background-color: white;
    margin: 2rem 0rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  `;

  return (
    <Fragment>
      <Home>
        <Container>
          <OrderDetails>
            <div className=" content">
              <p>Supplier</p>
              <h6>
                Easy Cost fruits <br /> vegetables
              </h6>
            </div>
            <div className=" content">
              <p>Shipping Date</p>
              <h6>THU, Feb 10</h6>
            </div>
            <div className=" content">
              <p>Total</p>
              <h6>$ 15,800.40</h6>
            </div>
            <div className=" content">
              <p>Category</p>
              <h6>Foood</h6>
            </div>
            <div className=" content">
              <p>Department</p>
              <h6>300-400-678</h6>
            </div>
            <div className=" content">
              <p>Status</p>
              <h6>Awaiting Your Approval</h6>
            </div>
                  </OrderDetails>
                  <OrderTable/>
        </Container>
      </Home>
    </Fragment>
  );
};

export default Dashboard;
