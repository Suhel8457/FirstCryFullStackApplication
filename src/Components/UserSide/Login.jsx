import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../UserSide/Login.css";
import BaseUrl from "../BaseUrl";

function Login() {
  const [userdata, setUserData] = useState({});
  const [loggedstatus, setLoggedStatus] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  //For Setting Input Email
  const HandleInput = (e) => {
    setInput(e.target.value);
  };
  //For Setting Password Input
  const HandlepasswordInput = (e) => {
    setPasswordInput(e.target.value);
  };
  const ValidateCredentials = () => {
    if (userdata.password === passwordInput) {
      if (userdata.role == "user") {
        navigate("/landingscreen");
      } else {
        navigate("/admin");
      }
    }
  };
  async function EmailValidate() {
    var flag = false;
    var regName =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(regName.test(input));
    if (regName.test(input)) {
      var k = document.getElementById("emailInput");
      k.className = "form-control is-valid";
      flag = true;
    } else {
      var k = document.getElementById("emailInput");
      k.className = "form-control is-invalid";
      document.getElementById("emailInput").focus();
      flag = false;
    }

    if (flag) {
      await axios.get(`${BaseUrl}/getuserbymail/${input}`).then((response) => {
        setUserData(response.data);
      });
      localStorage.setItem("userdata", JSON.stringify(userdata));
      ValidateCredentials();
    }
  }
  return (
    <div className="login">
      <div class="container">
        <div class="col">
          <div class="row">
            <img
              src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
              id="imageLogo"
            ></img>
          </div>
          <div class="row">
            <span id="register">
              <strong>LOGIN / REGISTER</strong>
            </span>
          </div>
          <div class="row">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email ID "
              id="emailInput"
              onChange={HandleInput}
            ></input>
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
              id="passwordTxt"
              onChange={HandlepasswordInput}
            ></input>
          </div>
          <div class="row">
            <button
              type="button"
              className="btn"
              id="login"
              title="Login Button"
              onClick={EmailValidate}
            >
              LOGIN
            </button>
          </div>

          <div class="row">
            <span className="col" id="or">
              {" "}
              OR
            </span>
          </div>

          <div class="row">
            <div className="container row" id="google">
              <div class="col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                  id="googleImage"
                />
              </div>
              <div class="col">
                <p className="col" id="txtGoogle">
                  GOOGLE
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="container row" id="google">
              <div class="col">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  id="googleImage"
                />
              </div>
              <div class="col">
                <p className="col" id="txtFacebook">
                  FACEBOOK
                </p>
              </div>
            </div>
            <div class="row">
              <span id="newUser" href="/">
                <a style={{ textDecoration: "none" }} href="/">
                  New to FirstCry?Register Here
                </a>
              </span>
            </div>
            <div class="row">
              <span id="terms">By Continuing, you agree to Firstcry's</span>
              <p>
                <a href="#" target="_self">
                  Conditions of Use
                </a>{" "}
                and{" "}
                <a href="#" target="_self">
                  Privacy Notice.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
