import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BaseUrl from "../BaseUrl";
import { useLocation } from "react-router";

function SearchResults() {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${BaseUrl}/getByProductName/${location.state.productName.searchvalue}`
      )
      .then((response) => {
        setSearchResult(response.data);
      });
  });
  return (
    <div>
      <div className="container">
        <div className="row imagebody">
          {searchResult.map((item) => {
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
                              id={item.productId}
                              style={{ fontSize: "smaller" }}
                            >
                              ADD CART
                            </button>
                          </div>
                          <div class="col">
                            <button type="button" className="btn bshort">
                              SHORTLIST
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
export default SearchResults;
