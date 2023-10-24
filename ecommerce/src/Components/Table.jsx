import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setApproved,
  setCancelled,
  setModalValue,
} from "../Redux/Slices/Approval";

import {
  AiOutlineSearch,
  AiFillPrinter,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const OrderTable = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.approval);
  const localModalValue = useSelector((state) => state.approval.modalValue);

  const [data, setdata] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null); 


  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleApprove = (itemId) => {
    const updatedData = data.map((item) =>
      item.id === itemId ? { ...item, status: "approved" } : item
    );
    setdata(updatedData);
  };

    const handleCancel = (itemId) => {
    setSelectedRowId(itemId); // Track the row where No was clicked
    setIsModalOpen(true);
  };

  const handleModalYes = () => {
    dispatch(setCancelled());
    setIsModalOpen(false);
  };

  const handleModalNo = () => {
    dispatch(setModalValue("urgent-missing"));
    setIsModalOpen(false);
  setIsModalOpen(false);
  if (selectedRowId !== null) {
    // Update the status of the selected row to "urgent-missing"
    const updatedData = data.map((item) =>
      item.id === selectedRowId
        ? { ...item, status: "urgent-missing" }
        : item
    );
    setdata(updatedData);
    setSelectedRowId(null); // Reset the selected row
  }
  }

  const fetchData = async () => {
    try {
      const res = await axios.get("/db.json");
      const result = res.data.Data;
      setdata(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [localModalValue]);

  return (
    <Fragment>
      <TableData className="p-5">
        <Row>
          <div>
            <InputBox>
              <input type="text" className="search-bar" />
              <AiOutlineSearch size={25} />
            </InputBox>
          </div>
          <div className="d-flex justify-content-end gap">
            <button className="approve">Approve</button>
            <button className="print">
              <AiFillPrinter />
            </button>
          </div>
        </Row>
        <div className="table-responsive">
          <Table className="table mt-2">
            <tr className="bg-success">
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
            <tbody>
              {data &&
                data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} />
                      </td>
                      <td>{item.product_name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.total}</td>
                      <td>
                        {status === "cancelled" && (
                          <button className="cancel-btn">
                            {localModalValue}
                          </button>
                        )}
                        {localModalValue === "urgent-missing" && (
                          <button className="cancel-btn">
                            {localModalValue}
                          </button>
                        )}

                        {isModalOpen && (
                          <Modal show={isModalOpen} onHide={handleClose}>
                           
                            <Modal.Body className="p-5">
                              <p className="text-center">
                                Are you sure you want to cancel?
                              </p>
                              <div className="d-flex justify-content-center gap-3">
                                <button
                                  onClick={handleModalYes}
                                  className=" btn btn-danger"
                                >
                                  Yes
                                </button>
                                <button
                                  onClick={()=>handleModalNo(item.id)}
                                  className="btn btn-primary"
                                >
                                  No
                                </button>
                              </div>
                            </Modal.Body>
                          </Modal>
                        )}

                        {item.status === "approved" ? (
                          <button className="app-btn">Approved</button>
                        ) : (
                          <button
                            className="app-btn"
                            onClick={() => handleApprove(item.id)}
                          >
                            <AiOutlineCheck />
                          </button>
                        )}
                        <button
                          className="cancel-btn"
                          onClick={()=>handleCancel(item.id)}
                          data-target=".bd-example-modal-sm"
                          data-toggle="modal"
                        >
                          <AiOutlineClose />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </TableData>
    </Fragment>
  );
};

const TableData = styled.div`
  background-color: white;
  border-radius: 10px;
`;
const Table = styled.table`
  border-radius: 10px;
`;
const InputBox = styled.div`
  background-color: #ededed;
  padding: 0.4rem;
  border-radius: 10px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default OrderTable;
