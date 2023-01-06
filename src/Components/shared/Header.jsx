import React from "react";
import "../shared/Header.css";
import { useState } from "react";
import axios from "axios";
import BaseUrl from "../BaseUrl";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const [searchvalue, setSearchvalue] = useState("");
  const [productllist, setProductList] = useState([]);
  const [loggedstatus, setLoggedStatus] = useState(false);

  useEffect(() => {
    if (userData) {
      setLoggedStatus(true);
    }
    axios.get(`${BaseUrl}/getAllProducts`).then((response) => {
      setProductList(response.data);
    });
  }, []);

  var userData = JSON.parse(localStorage.getItem("userdata"));
  const LogOut = (e) => {
    if (e.target.value == "LogOut") {
      setLoggedStatus(false);
      localStorage.clear();
    }
  };
  const GoToCart = () => {
    if (userData) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };
  const Login = () => {
    navigate("/login");
  };

  const GetSearchResults = () => {
    console.log(searchvalue);
    navigate("/searchresults", { state: { productName: { searchvalue } } });
  };
  const SearchHandler = (e) => {
    setSearchvalue(e.target.value);
  };
  return (
    <div>
      <div className="header" id="header">
        <img
          title="Firstcry.com - Online Baby &amp; Kids Store"
          src="//cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
          alt="logo"
          id="imgOne"
        />
        <input
          list="browsers"
          type="search"
          className="form-control"
          placeholder="Search for a Category, Brand or Product"
          id="searchBox"
          onChange={SearchHandler}
        />

        <datalist id="browsers">
          {productllist.map((item) => {
            return <option value={item.productName} />;
          })}
        </datalist>
        <span
          className="fa fa-search form-control-feedback"
          id="searchIcon"
        ></span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
          id="location"
        ></img>
        <ul type="none" id="headerList">
          <li id="li" onClick={GetSearchResults}>
            Select Location
          </li>

          <li className="vr"></li>
          <li id="li">Stores&Preschools</li>
          <li className="vr"></li>
          <li id="li">Support</li>
          <li className="vr"></li>
          <li id="li">Track Order</li>
          <li className="vr"></li>
          <li id="li">First Cry Parenting</li>
          <li className="vr"></li>
          <li id="li">
            {loggedstatus ? (
              userData.fullName
            ) : (
              <p onClick={Login}>Login/Register</p>
            )}
          </li>
          <li className="vr"></li>
          <li id="li">
            <select
              style={{ backgroundColor: "antiquewhite", border: "none" }}
              onClick={LogOut}
            >
              <option>MyProfile</option>
              <option value="LogOut">LogOut</option>
            </select>
          </li>
          <li className="vr"></li>
          {/* <img src="https://cdn-icons-png.flaticon.com/512/860/860808.png" id="wishListIcon"></img>
                    <li id="li">ShortList</li>
                    <li className='vr'></li> */}
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="NewNavbar_carticon__9dmXO"
            id="cartIcon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
              fill="currentColor"
            ></path>
            <path
              d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
              fill="currentColor"
            ></path>
            <path
              d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
              fill="currentColor"
            ></path>
          </svg>
          <li id="li" onClick={GoToCart}>
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
