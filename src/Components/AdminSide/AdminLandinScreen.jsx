import React from "react";
import Header from "../shared/Header";
import { useState } from "react";
import axios from "axios";
import BaseUrl from "../BaseUrl";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import Categories from "../shared/Categories";

function AdminLandinScreen() {
  const [add, setAdd] = useState({
    productName: "",
    description: "",
    productOriginalPrice: "",
    productDiscount: "",
    productFinalPrice: "",
    productColor: "",
    productSize: "",
    imageUrl: "",
    quantity: "",
    specType: "",
    brand: "",
    material: "",
    occasion: "",
  });
  const [productType, setProductType] = useState("");
  const ChangeHandlerType = (e) => {
    setProductType(e.target.value);
  };
  const Display = async () => {
    console.log(productType);
    await axios
      .post(`${BaseUrl}/saveProduct/clothing`, add)
      .then((response) => {
        console.log(response.data).catch((e) => {
          console.log(e.data);
        });
      });
  };
  const ChangeHandler = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Header />
      <Categories/>
      <div>
        <button
          type="button"
          class="btn btn-info"
          style={{ marginLeft: "10rem" }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="col">
                  <label>Enter ProductName</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    name="productName"
                    onChange={ChangeHandler}
                    placeholder="Enter ProductName"
                  ></input>
                </div>
                <div class="col">
                  <label>Choose Category</label>
                </div>
                <div class="col">
                  <select
                    className="form-control"
                    name="productType"
                    onChange={ChangeHandlerType}
                  >
                    <option Value="clothing">clothing</option>
                    <option value="footwear"> footwear</option>
                    <option value="babybath">babypath</option>
                  </select>
                </div>
                <div class="col">
                  <label>Enter Product Description</label>
                </div>

                <div class="col">
                  {" "}
                  <input
                    type="text"
                    name="description"
                    onChange={ChangeHandler}
                    className="form-control"
                    placeholder="Enter Description"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter Original Price</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="productOriginalPrice"
                    placeholder="Enter Original Price"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter Discount in Percentage</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="productDiscount"
                    placeholder="Enter Discout Percentage"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter Quantity</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="quantity"
                    placeholder="Enter Quantity"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter Product Size</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="productSize"
                    placeholder="Enter Size"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter Product Color</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="productColor"
                    placeholder="Enter Color"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter Image Url</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="imageUrl"
                    placeholder="Enter Image Url"
                  ></input>
                </div>
                <div class="col">
                  <label>
                    Enter Type Of Product like Top Wear,Jeans,Lotion
                  </label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="specType"
                    placeholder="Enter Type :Example Top Wear"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter BrandName</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="brand"
                    placeholder="Enter BrandName"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter Material</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="material"
                    placeholder="Enter Material"
                  ></input>
                </div>
                <div class="col">
                  <label>Enter Occasion</label>
                </div>
                <div class="col">
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    onChange={ChangeHandler}
                    name="occasion"
                    placeholder="Enter Occasion"
                  ></input>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={Display}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLandinScreen;
