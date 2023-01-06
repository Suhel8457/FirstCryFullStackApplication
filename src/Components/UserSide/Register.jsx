import React from "react";
import { useState } from "react";
import "../UserSide/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../BaseUrl";
function Register() {
  const navigate = useNavigate();
  //Storing Data collected from Input tag in Onject using UseState
  const [userRegistration, setUserRegistration] = useState({
    fullName: "",
    mobileNumber: "",
    emailId: "",
    password: "",
  });
  const [warnStatus, setwarnStatus] = useState(false);
  const [warnMessage, setwarnMessage] = useState("");
  const [successStatus, setsuccessStatus] = useState(false);
  const [successMsg, setsuccessMsg] = useState("");
  const UserDataHandle = (e) => {
    setUserRegistration({
      ...userRegistration,
      [e.target.name]: e.target.value,
    });
  };
  setTimeout(() => {
    setwarnMessage("");
    setwarnStatus(false);
    setsuccessStatus(false);
    setsuccessMsg("");
  }, 5000);

  // Name Validation
  function FullNameValidate() {
    var regName = /[ a-z A-Z]+$/;
    if (!regName.test(userRegistration.fullName)) {
      var k = document.getElementById("fullName");
      console.log(k);
      k.className = "form-control is-invalid";
      document.getElementById("fullName").focus();
      return false;
    } else {
      var k = document.getElementById("fullName");
      k.className = "form-control is-valid";
      return true;
    }
  }

  function MobileNumberValidate() {
    const regName = /^[6-9]{1}[0-9]{9}$/;

    if (!regName.test(userRegistration.mobileNumber)) {
      var k = document.getElementById("mobile");
      k.className = "form-control is-invalid";

      document.getElementById("mobile").focus();
      return false;
    } else {
      var k = document.getElementById("mobile");
      k.className = "form-control is-valid";
      return true;
    }
  }
  function EmailValidate() {
    var regName =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(
      regName.test(userRegistration.emailId),
      userRegistration.emailId
    );
    if (regName.test(userRegistration.emailId)) {
      var k = document.getElementById("emailId");
      k.className = "form-control is-valid";
      return true;
    } else {
      var k = document.getElementById("emailId");
      k.className = "form-control is-invalid";
      document.getElementById("emailId").focus();
      return false;
    }
  }
  function PasswordValidate() {
    var regName = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    console.log(userRegistration.password);
    if (!regName.test(userRegistration.password)) {
      var k = document.getElementById("password");
      k.className = "form-control is-invalid";
      document.getElementById("password").focus();
      return false;
    } else {
      var k = document.getElementById("password");
      k.className = "form-control is-valid";
      return true;
    }
  }
  if (successStatus) {
    axios.get(`${BaseUrl}/sendmail/${userRegistration.emailId}`);
    navigate("/login");
  }
  const Validate = async () => {
    var flag1, flag2, flag3;
    var flag4;
    flag1 = FullNameValidate();
    flag2 = EmailValidate();
    flag3 = MobileNumberValidate();
    flag4 = PasswordValidate();
    if (flag1 && flag2 && flag3 && flag4) {
      await axios
        .post(`${BaseUrl}/saveUserData`, userRegistration)
        .then((response) => {
          setsuccessMsg(response.data);
          setsuccessStatus(true);
        })
        .catch((error) => {
          setwarnStatus(true);
          setwarnMessage(error.response.data);
        });
    }
  };

  return (
    <div className="registerUser">
      <div class="container">
        <div class="col">
          <div class="row">
            <img
              src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
              id="imageLogo"
            ></img>
          </div>
          <div class="row">
            <span id="regText">REGISTER</span>
          </div>
          <div class="row">
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter Your Full Name"
              onChange={UserDataHandle}
              id="fullName"
            ></input>
            <span className="format">
              Only Alphabetical Characters are Allowed
            </span>
          </div>
          <div class="row">
            <input
              type="text"
              name="mobileNumber"
              className="form-control "
              placeholder="Enter Your Mobile Number"
              id="mobile"
              onChange={UserDataHandle}
            ></input>
            <span className="format">
              Mobile Number Format is as: 9848xxxxxx
            </span>
          </div>
          <div class="row">
            <input
              type="email"
              name="emailId"
              className="form-control"
              placeholder="Enter Your Email ID"
              id="emailId"
              onChange={UserDataHandle}
            ></input>
            <span className="format">
              Only Email Format xxxxx@gmail.com is Allowed
            </span>
          </div>
          <div class="row">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Your Password"
              id="password"
              onChange={UserDataHandle}
            ></input>
            <span className="format">
              Password must be 8 character long with atleat
            </span>
            <span className="format">
              {" "}
              1 uppercase,lowercase & 1 Numeric Character
            </span>
          </div>
          <div className="row">
            {" "}
            {successStatus ? (
              <div
                class="alert alert-success"
                role="alert"
                style={{ width: "18rem", marginTop: "1rem" }}
              >
                {successMsg}
              </div>
            ) : null}
          </div>
          <div className="row">
            {" "}
            {warnStatus ? (
              <div
                class="alert alert-danger"
                role="alert"
                style={{ width: "18rem", marginTop: "1rem" }}
              >
                {warnMessage}
              </div>
            ) : null}
          </div>
          <div class="row" style={{ marginTop: "-1.5rem" }}>
            <button
              type="button"
              onClick={Validate}
              className="btn"
              id="rcontinue"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
