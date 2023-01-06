import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UserSide/ListItems.css";
import BaseUrl from "../BaseUrl";
import Header from "../shared/Header";
import Categories from "../shared/Categories";
import { toast, ToastContainer } from "react-toastify";

function Listitems() {
  const navigate = useNavigate();
  const [listItems, setListItems] = useState([]);
  const [message, setmessage] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [infoStatus, setInfoStatus] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [catMessage, setCatMessage] = useState("");
  const [data, setdata] = useState([]);
  const [filterdDataprice, setFilteredDataPrice] = useState("");
  const [filterDiscount, setFilterDiscount] = useState("");
  const discountFilter = ["0-30%", "30-60%", "60-90%"];
  const priceFilterAttribute = ["0-250", "250-500", "500-1000", "1000-3000"];
  const finalFilterPriceData = [];
  const finalFilterDiscountData = [];
  const DiscFilter = (e) => {
    const filterdDatadisc = discountFilter.filter(
      (item) => item == e.target.id
    );
    setFilterDiscount(filterdDatadisc[0]);
  };
  const PriceFilter = (e) => {
    const filterdDatapriceItem = priceFilterAttribute.filter(
      (item) => item == e.target.id
    );
    setFilteredDataPrice(filterdDatapriceItem[0]);
  };

  const GlobalFilter = () => {
    const DataAfterDiscFilter = () => {
      if (filterDiscount == "0-30%") {
        const filtered = data.filter(
          (item) => item.productDiscount > 0 && item.productDiscount < 30
        );
        filtered.map((item) => {
          finalFilterDiscountData.push(item);
        });
      } else if (filterDiscount == "30-60%") {
        const filtered = data.filter(
          (item) => item.productDiscount > 30 && item.productDiscount < 60
        );
        filtered.map((item) => {
          finalFilterDiscountData.push(item);
        });
      } else if (filterDiscount == "60-90%") {
        const filtered = data.filter(
          (item) => item.productDiscount > 60 && item.productDiscount < 90
        );
        filtered.map((item) => {
          finalFilterDiscountData.push(item);
        });
      }
    };

    const DataAfterPriceFilter = () => {
      if (filterdDataprice == "0-250") {
        const filtered = data.filter((item) => {
          return item.productFinalPrice > 0 && item.productFinalPrice < 250;
        });
        filtered.map((item) => {
          finalFilterPriceData.push(item);
        });
      } else if (filterdDataprice == "250-500") {
        const filtered = data.filter((item) => {
          return item.productFinalPrice < 500 && item.productFinalPrice > 250;
        });
        filtered.map((item) => {
          finalFilterPriceData.push(item);
        });
      } else if (filterdDataprice == "500-1000") {
        const filtered = data.filter((item) => {
          return item.productFinalPrice > 500 && item.productFinalPrice < 1000;
        });
        filtered.map((item) => {
          finalFilterPriceData.push(item);
        });
      } else if (filterdDataprice == "1000-3000") {
        const filtered = data.filter((item) => {
          return item.productFinalPrice > 1000 && item.productFinalPrice < 3000;
        });
        filtered.map((item) => {
          finalFilterPriceData.push(item);
        });
      }
    };
    DataAfterDiscFilter();
    DataAfterPriceFilter();
    if (
      finalFilterDiscountData.length != 0 &&
      finalFilterPriceData.length != 0
    ) {
      var common = finalFilterDiscountData.filter(
        (x) => finalFilterPriceData.indexOf(x) !== -1
      );
      setListItems(common);
    } else if (
      finalFilterDiscountData.length != 0 &&
      finalFilterPriceData.length == 0
    ) {
      setListItems(finalFilterDiscountData);
    } else if (
      finalFilterPriceData.length != 0 &&
      finalFilterDiscountData.length == 0
    ) {
      setListItems(finalFilterPriceData);
    }
    if (
      finalFilterDiscountData.length == 0 ||
      finalFilterPriceData.length == 0 ||
      common.length == 0
    ) {
      toast.warn("No Items Found");
    }
  };
  // const filterM = (e) => {
  //   let Category = e.target.id;
  //   if (Category == "0-250") {
  //     const filtered = data.filter((item) => {
  //       return item.productFinalPrice > 0 && item.productFinalPrice < 250;
  //     });
  //     setListItems(filtered);
  //   } else if (Category == "250-500") {
  //     const filtered = data.filter((item) => {
  //       return item.productFinalPrice < 500 && item.productFinalPrice > 250;
  //     });
  //     setListItems(filtered);
  //   } else if (Category == "500-1000") {
  //     console.log(Category);
  //     const filtered = data.filter((item) => {
  //       return item.productFinalPrice > 500 && item.productFinalPrice < 1000;
  //     });
  //     setListItems(filtered);
  //   } else if (Category == "1000-3000") {
  //     const filtered = data.filter((item) => {
  //       return item.productFinalPrice > 1000 && item.productFinalPrice < 3000;
  //     });

  //     setListItems(filtered);
  //   }
  // };

  // const refresh = () => {
  //   document.getElementById("formOne").reset();
  // };

  // const displayEvent = (e) => {
  //   let element = document.getElementById("priceFilter");
  //   element.style.display = "block";
  // };
  let user = JSON.parse(localStorage.getItem("userdata"));

  //Get List of Products by Category
  useEffect(() => {
    axios
      .get(`${BaseUrl}/getAllProducts`)
      .then((response) => {
        setListItems(response.data);
        setdata(response.data);
      })
      .catch((error) => {
        setmessage(error.data);
        setErrorStatus(true);
      });
  }, []);

  /** Axios Call Based On Selection Of Sorting  */
  const SortByPrice = (e) => {
    if (e.target.value == "Price:Low To High") {
      axios.get(`${BaseUrl}/sortByPrice`).then((response) => {
        setListItems(response.data);
      });
    } else if (e.target.value == "Discount") {
      axios.get(`${BaseUrl}/sortByDiscount`).then((response) => {
        setListItems(response.data);
      });
    } else if (e.target.value == "Name") {
      axios.get(`${BaseUrl}/sortByName`).then((response) => {
        setListItems(response.data);
      });
    }
  };
  /**API request On Hitting Add to Cart Button */
  const SendToCart = async (e) => {
    if (user) {
      await axios
        .post(`${BaseUrl}/saveCart/${e.target.id}/${user.emailId}`)
        .then((response) => {
          toast.success(response.data);
        })
        .catch((e) => {
          toast.error(e.response.data);
        });
    } else {
      navigate("/login");
    }
  };
  /**To dispay warning message and success message for certain duration */
  // setTimeout(() => {
  //   setmessage("");
  //   setInfoStatus(false);
  //   setInfoMessage("");
  //   setErrorStatus(false);
  // }, 5000);
  const array = [
    "https://cdn.fcglcdn.com/brainbees/images/products/438X531/11742571a.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/products/438X531/11742571a.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/products/438X531/11742571a.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/products/438X531/11742571a.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/products/438X531/11742571a.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/products/438X531/11742571a.jpg",
  ];
  return (
    <>
      <Header />
      <Categories />
      <ToastContainer />
      <button onClick={GlobalFilter}>filter</button>
      <div className="images">
        {errorStatus ? (
          <div class="alert alert-warning" role="alert">
            {message}
          </div>
        ) : null}
        {infoStatus ? (
          <div class="alert alert-success" role="alert">
            {infoMessage}
          </div>
        ) : null}

        <div className="fabric" id="check">
          <div class="container">
            <div class="row ">
              <div class="col ">FilterBy:Subcategory</div>
              <div class="col subcategory ">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Discount Filter
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        id="0-30%"
                        class="dropdown-item"
                        href="#"
                        onClick={DiscFilter}
                      >
                        0-30%
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        id="30-60%"
                        onClick={DiscFilter}
                      >
                        30-60%
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={DiscFilter}
                        id="60-90%"
                      >
                        60-90%
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col subcategory ">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Price Filter
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        id="0-250"
                        class="dropdown-item"
                        href="#"
                        onClick={PriceFilter}
                      >
                        0-250
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        id="250-500"
                        onClick={PriceFilter}
                      >
                        250-500
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={PriceFilter}
                        id="500-1000"
                      >
                        500-1000
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={PriceFilter}
                        id="1000-3000"
                      >
                        1000-3000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col subcategory">AgeCritera</div>
              <div class="col subcategory">Gender</div>
              <div class="col subcategory">Colors</div>
              <div class="col subcategory">Material</div>
            </div>
          </div>
        </div>
        <div className="sort">
          <select className="form-control" id="listsort" onClick={SortByPrice}>
            <option className="diabled">Sort</option>
            <option value="Discount">Discount</option>
            <option value="Price:Low To High">Price:Low To High</option>
            <option value="Name">Name A-Z</option>
          </select>
        </div>
        <div className="container filter" id="priceFilter">
          <div class="container">
            <div class="row">
              <div class="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  &nbsp;&nbsp;250-500
                </label>
              </div>
              <div class="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  &nbsp;&nbsp;500-1000
                </label>
              </div>
              <div class="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  &nbsp;&nbsp;1000-2000
                </label>
              </div>
              <div class="col">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  &nbsp;&nbsp;2000-000
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="imagesList">
          <div className="row">
            {listItems.map((item) => {
              return (
                <div className="col-sm-3">
                  <div class="card" id="image">
                    <img
                      src={item.imageUrl}
                      class="card-img-top"
                      id="dispImage"
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
                            <div class="col">
                              <button
                                type="button"
                                className="btn addtocart"
                                id={item.productId}
                                onClick={SendToCart}
                              >
                                ADD CART
                              </button>
                            </div>
                            <div class="col">
                              {user.role != "admin" ? (
                                <button
                                  className="btn btn-outline-dark"
                                  id="shortlist"
                                >
                                  ShortList
                                </button>
                              ) : (
                                <button
                                  className="btn btn-outline-dark"
                                  id="shortlist"
                                >
                                  Edit
                                </button>
                              )}
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
    </>
  );
}

export default Listitems;
