import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import BaseUrl from "../BaseUrl";
import Categories from "../shared/Categories";
import Header from "../shared/Header";
import "../UserSide/BabyCream.css";

function BabyCream() {
  const [babyItem, setBabyItem] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);
  const [message, setmessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [infoStatus, setInfoStatus] = useState(false);
  const [productId, setProductId] = useState(0);
  const navigate = useNavigate();
  /**Getting the list of items related to product type babybathProducts */
  useEffect(() => {
    axios
      .get(`${BaseUrl}/getBabyBathProducts`)
      .then((response) => {
        setBabyItem(response.data);
      })
  }, []);

  let user = JSON.parse(localStorage.getItem("userdata"));
  /** Hiding the Messages related to warning or success ;After time Out */
  setTimeout(() => {
    setmessage("");
    setInfoStatus(false);
    setInfoMessage("");
    setErrorStatus(false);
  }, 5000);
  /**Posting the particular item to Cart.If the User is logged in Or Else push to Login Page */
  const SendToCart = async (e) => {
    setProductId(e.target.id);
    if (user) {
      await axios
        .post(`${BaseUrl}/saveCart/${e.target.id}/${user.emailId}`)
        .then((response) => {
          console.log(response);
          setInfoMessage(response.data);
          setInfoStatus(true);
        })
        .catch((e) => {
          console.log(e.response.data);
          setmessage(e.response.data);
          setErrorStatus(true);
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <Header />
      <Categories />
      <img
        src="https://tpc.googlesyndication.com/simgad/16686271413264127755"
        className="imgAdd"
      ></img>
      {/* Container Alert related to display Of Warning Message based On status */}
      {errorStatus ? (
        <div class="alert alert-warning" role="alert">
          {message}
        </div>
      ) : null}
      {/* Alert Message Related to Progress */}
      {infoStatus ? (
        <div class="alert alert-success" role="alert">
          {infoMessage}
        </div>
      ) : null}
      {/* Sequential Display of Image Cards and its Price Details.
      On Hitting Add to Cart Button If the User Is Logged in .
      Item gets Added To Cart Or else pushed to login page */}
      <div className="container">
        <div className="row imagebody">
          {babyItem.map((item) => {
            return (
              <div className="col-sm-3">
                <div class="card imagecard">
                  <img
                    src={item.imageUrl}
                    class="card-img-top"
                    id="imgsize"
                    alt="..."
                  />
                  <div class="card-body">
                    <div class="container">
                      <div class="row">
                        <div
                          class="col"
                          style={{ fontSize: "small", textAlign: "center" }}
                        >
                          {item.productName}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">{item.productFinalPrice}</div>
                        <div class="col">
                          <span style={{ textDecoration: "line-through" }}>
                            {item.productOriginalPrice}
                          </span>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col">color</div>
                        <div className="col"> {item.productColor}</div>
                      </div>
                      <div class="row">
                        <div class="col">SIZE</div>
                        <div className="col"> {item.productSize}</div>
                        <div class="row">
                          <div class="col ">
                            <button
                              type="button"
                              className="bcart"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={SendToCart}
                              id={item.productId}
                              style={{ fontSize: "smaller" }}
                            >
                              ADD CART
                            </button>
                          </div>
                          <div class="col">
                            <button type="button" className="btn bshort">
                              {user.role == "user" ? (
                                <p>SHORTLIST</p>
                              ) : (
                                <p>Edit</p>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default BabyCream;
