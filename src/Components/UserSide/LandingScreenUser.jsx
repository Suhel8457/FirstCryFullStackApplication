import React from "react";
import Header from "../shared/Header";
import Categories from "../shared/Categories";
import Imagescarousel from "../shared/Imagescarousel";
import Footer from "../shared/Footer";

function LandingScreenUser() {
  /**Array Of Images On Landing Screen */
  const array = [
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_moas_131222_21.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_moas_131222_22.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_moas_131222_23.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_moas_131222_24.jpg",
  ];
  const imgList = [
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_051122_02.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_051122_03.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_051122_04.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_051122_05.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_051122_06.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_051122_07.jpg",
  ];
  const imgGear = [
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_gear_&_activity_051122_19.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_gear_&_activity_051122_20.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_gear_&_activity_051122_21.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_gear_&_activity_051122_22.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_gear_&_activity_051122_23.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_gear_&_activity_051122_24.jpg",
  ];
  const imgWomenCare = [
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_08.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_09.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_10.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_12.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_13.jpg",
    "https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_16.jpg",
  ];
  return (
    <div>
      <Header />
      <Categories />
      <Imagescarousel />
      <div class="row">
        {array.map((itemUrl) => {
          return (
            <div class="col">
              <img
                src={itemUrl}
                className="display"
                style={{ width: "12rem" }}
              ></img>
            </div>
          );
        })}
      </div>
      <div className="row">
        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_051122_01.jpg"></img>
      </div>
      {/* Displaying the images In sequential Order using map function */}
      <div class="row">
        {imgList.map((itemUrl) => {
          return (
            <div class="col-2">
              <img
                src={itemUrl}
                className="display"
                style={{ width: "12rem" }}
              ></img>
            </div>
          );
        })}
      </div>
      <div className="row">
        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/winter_desktop_gear_&_activity_051122_18.jpg"></img>
      </div>
      <div class="row">
        {imgGear.map((itemUrl) => {
          return (
            <div class="col-2">
              <img
                src={itemUrl}
                className="display"
                style={{ width: "12rem" }}
              ></img>
            </div>
          );
        })}
      </div>
      <div class="row">
        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_health_&_safty_071122_07.jpg"></img>
      </div>
      <div class="row">
        {imgWomenCare.map((itemUrl) => {
          return (
            <div class="col-2">
              <img
                src={itemUrl}
                className="display"
                style={{ width: "12rem" }}
              ></img>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default LandingScreenUser;
