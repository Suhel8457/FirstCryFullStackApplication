import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../UserSide/Cart.css";
import BaseUrl from "../BaseUrl";
import Header from "../shared/Header";
import Categories from "../shared/Categories";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Cart() {
  const [cartList, setCartList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [load, setLoad] = useState(false);
  let productArray = [];

  /**On Placing Order Updtating Inventory Quantity Of Items in the Product Table */
  const PlaceOrder = async () => {
    for (let i = 0; i < productArray.length; i++) {
      await axios
        .put(`${BaseUrl}/updateInventoryQuantityProduct/${productArray[i]}`)
        .then((response) => {
          toast.success(response.data);
        });
      await axios
        .put(`${BaseUrl}/updateInventoryQuantityCart/${productArray[i]}`)
        .then((response) => {
          toast.success(response.data);
        });
    }
    /**Getting the Price Details Related to particular User */
    await axios
      .get(`${BaseUrl}/getPriceDetails/${userDetails.emailId}`)
      .then((response) => {
        setPriceList(response.data);
      });
  };
  let userDetails = JSON.parse(localStorage.getItem("userdata"));
  /**Updating the Selected Quantity in CartItem */
  const HandleQuantity = async (e) => {
    if (e.target.value != "Qty") {
      console.log(e.target.id, e.target.value);
      await axios
        .put(
          `${BaseUrl}/updateSelectedQuantity/${e.target.value}/${e.target.id}`
        )
        .then((response) => {
          toast.success(response.data);
        })
        .catch((e) => {
          toast.error(e.response.data);
        });
    }
  };
  /**Getting The List Of Items On Loading Cart Screen */
  useEffect(() => {
    axios
      .get(`${BaseUrl}/getListOfItems/${userDetails.emailId}`)
      .then((response) => {
        setCartList(response.data);
      });
  }, [load]);

  const ViewPrice = async () => {
    await axios
      .get(`${BaseUrl}/getPriceDetails/${userDetails.emailId}`)
      .then((response) => {
        setPriceList(response.data);
      });
  };
  /**Deleting the Particular Item From Cart */
  const DeleteCartItem = async (e) => {
    await axios.delete(`${BaseUrl}/deleteItem/${e.target.id}`);
    setLoad(!load);
  };
  return (
    <>
      <Header />
      <Categories />

      {/* Display Of Cart items As List In sequential .On Clicking
       Remove Item gets Deleted from Cart */}
      <div className="cart">
        <div className="headerCart ">
          <nav class="nav">
            <button type="button" className="btn  active">
              <a class="nav-link active " href="">
                Shopping Cart
              </a>
            </button>
            <button type="button" className="btn">
              <a class="nav-link active " style={{ color: "orange" }} href="x">
                My Shortlist
              </a>
            </button>
          </nav>
        </div>
        <div className="container" id="cartContainer">
          <div class="container cartContainer" id="offer">
            <div class="container text-center">
              <div class="col">
                <div class="row">
                  <div class="col">
                    <img
                      src="https://cdn.fcglcdn.com/brainbees/checkout/pers.jpg"
                      id="offerImage"
                    />
                  </div>
                  <div class="col">
                    <span id="Available">Available Offers:</span>
                  </div>
                </div>
                <div class="row">
                  <li id="txtListTwo">
                    Upto Rs. 500 Cashback on Paytm Wallet and Postpaid
                    Transactions (Minimum Order Value: Rs. 1000)
                  </li>
                </div>
                <div class="row">
                  <p>
                    <button
                      class="btn view "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      View More
                    </button>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <div>
                      <ul>
                        <li id="txtList">
                          Upto 5% Instant Discount on AU Bank Credit and Debit
                          Cards (Minimum Order Value: Rs. 2000){" "}
                          <a href="#" style={{ textDecoration: "none" }}>
                            T&C
                          </a>
                        </li>
                        <li id="txtList">
                          Upto 5% Instant Discount on Federal Bank Credit and
                          Debit Cards (Minimum Order Value: Rs. 2500){" "}
                          <a href="#" style={{ textDecoration: "none" }}>
                            T&C
                          </a>
                        </li>
                        <li id="txtList">
                          Pay using Simpl and get Flat Rs. 150 cashback (Minimum
                          Order Value: Rs. 1500){" "}
                          <a href="#" style={{ textDecoration: "none" }}>
                            T&C
                          </a>
                        </li>
                        <li id="txtList">
                          Get 2X cashback upto Rs. 500 on CRED Pay UPI(Minimum
                          Order Value: Rs.1000){" "}
                          <a href="#" style={{ textDecoration: "none" }}>
                            T&C
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="address">
            <div className="row">
              <div className="col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3177/3177262.png"
                  id="locationImage"
                ></img>
              </div>
              <div className="col" id="pinTxt">
                <span>Delivery PinCode </span>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter PinCode"
                ></input>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-primary">
                  APPLY
                </button>
              </div>
            </div>
          </div>
          <div class="alert alert-success mt-2" role="alert">
            A simple success alert—check it out!
          </div>

          <div className="cartBag">
            {cartList.map((item) => {
              return (
                <div class="row  segregate">
                  <div className="col">
                    <img src={item.imageUrl} id="cartImage"></img>
                  </div>
                  <div className="col">
                    <div className="row">{item.productName}</div>
                    <div className="row">
                      <span>
                        <b>Size :</b>
                        {item.productSize}
                      </span>
                    </div>
                    <div className="row">
                      <span>
                        <b>Fabric :</b>
                        {item.material}
                      </span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png"
                          id="truckImage"
                        ></img>
                      </div>
                      <div className="col" id="tomorrow">
                        Get it by Tomorrow 8PM
                      </div>
                    </div>
                  </div>
                  <div className="col" id="price">
                    <div className="row">
                      <b>₹{item.productFinalPrice}</b>
                    </div>
                    <div className="row">
                      <span>
                        MRP ₹
                        <span style={{ textDecoration: "line-through" }}>
                          {" "}
                          {item.productOriginalPrice}{" "}
                        </span>
                        <span style={{ color: "red" }}>
                          {" "}
                          {item.productDiscount}% OFF
                        </span>
                      </span>
                    </div>

                    <div className="row quantity">
                      <div className="col" id="tst">
                        <span>Quantity</span>
                      </div>
                      <div className="col">
                        <span></span>
                      </div>
                      <span style={{ display: "none" }}>
                        cartId: {productArray.push(item.cartId)}
                      </span>

                      <select
                        className="form-control col quantity"
                        id={item.cartId}
                        onChange={HandleQuantity}
                      >
                        <option>Qty</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>

                      <div className="col" id="remove">
                        <button
                          type="button"
                          className="btn btn-danger"
                          id={item.cartId}
                          onClick={DeleteCartItem}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="removeButton">
            <div className="row"></div>
          </div>
          <div className="placeOrder">
            <button
              type="button"
              className="btn form-control"
              id="continue"
              onClick={ViewPrice}
            >
              View Price Details{" "}
            </button>
            <ToastContainer />
          </div>
        </div>
        <div className="paymentInformation container">
          <div className="col">
            <div className="row" id="payTxt">
              <span>PAYMENT INFORMATION</span>
            </div>
            <div className="row">
              <div className="col">
                <span>VALUE OF PRODUCT(S)</span>
              </div>
              <div className="col">
                <span>₹{priceList[1]}</span>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ color: "#5F8D4E" }}>
                <span>DISCOUNT(-)</span>
              </div>
              <div className="col">
                <span>₹{priceList[2]}</span>
              </div>
            </div>
            <div className="row" style={{ color: "#5F8D4E" }}>
              <div className="col">
                <span>SHIPPING</span>
              </div>
              <div className="col">
                <span>FREE</span>
              </div>
            </div>
            <hr className="dotted-line"></hr>
            <div className="row">
              <div className="col">
                <span>SUB TOTAL</span>
              </div>
              <div className="col">
                <span>₹{priceList[0]}</span>
              </div>
            </div>
            <hr className="dotted-line"></hr>
            <div className="row">
              <div
                className="col"
                style={{ color: "green", fontWeight: "bolder" }}
              >
                <span>FINAL PAYMENT</span>
              </div>
              <div
                className="col"
                style={{ color: "green", fontWeight: "bolder" }}
              >
                <span>₹{priceList[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
