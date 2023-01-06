import React from "react";
import "../shared/Imagescarousel.css";

function Imagescarousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn.fcglcdn.com/brainbees/banners/slurrpfarm_hp_mkt_po3_all_21671090412626.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_superhitfashionbrands_moas_desktop1670484404192.gif"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_rush_hour_dec_desktop1670605654901.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="   https://cdn.fcglcdn.com/brainbees/banners/hp_dp_pmp_f35_nov_994x3991668149715638.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>

          <div class="carousel-item">
            <img
              src=" https://cdn.fcglcdn.com/brainbees/banners/test/MKTGN_HP_MFF_AU_5MAY_20225422836.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.fcglcdn.com/brainbees/banners/test/MKTGN_HP_BC_5MAY_202254213721.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src=" https://cdn.fcglcdn.com/brainbees/banners/toffyhouse_north994-x-3991670578810189.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
    </div>
  );
}

export default Imagescarousel;
