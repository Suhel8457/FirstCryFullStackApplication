import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import "../shared/Categories.css";
function Categories() {
  const navigate = useNavigate();
  let userInfo = JSON.parse(localStorage.getItem("userdata"));
  const GetBabyBathItems = () => {
    if (userInfo != null) {
      navigate("/babycream");
    } else {
      navigate("/login");
    }
  };
  const GetAllCategories = () => {
    console.log(userInfo);
    if (userInfo == null) {
      navigate("/login");
    } else {
      navigate("/listItems");
    }
  };

  return (
    <div>
      <div id="category">
        <div class="container catList">
          <div class="row">
            <div class="col" onClick={GetAllCategories}>
              ALL&nbsp;CATEGORIES
            </div>
            <div class="col">BOYS&nbsp;FASHION</div>
            <div class="col">GIRLS&nbsp;FASHION</div>
            <div class="col">FOOT&nbsp;WEAR</div>
            <div class="col">CHILDRENTOYS</div>
            <div class="col">DIAPERING</div>
            <div class="col">FEEDING</div>
            <div class="col" onClick={GetBabyBathItems}>
              BATHITEMS
            </div>
            <div class="col">NURSERY</div>
            <div class="col"> MOMS&nbsp;ESSENTIALS</div>
            <div class="col"> HEALTH</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
