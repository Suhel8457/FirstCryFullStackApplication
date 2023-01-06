import React from "react";
import "../shared/Footer.css";
import star from "../Images/star.png";
import brand from "../Images/brand.png";
import user from "../Images/user.png";
import truck from "../Images/truck.png";
import distribution from "../Images/distribution.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.png";
import youtube from "../Images/youtube.png";

function Footer() {
  return (
    <div>
      <div className="conatiner" id="footer">
        <marquee>
          <img
            src="https://cdn.fcglcdn.com/brainbees/banners/brandstrip1208-3-new-19-08-19.jpg"
            alt="W3docs"
          />
        </marquee>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="col">
                <img src={star} id="imgOnes"></img>
              </div>
              <div class="col"> 2 Lakhs + Unique Products</div>
            </div>
            <div class="col">
              <div class="col">
                <img src={brand} id="imgTwo"></img>
              </div>
              <div class="col">5800 brands</div>
            </div>
            <div class="col">
              <div class="col">
                <img src={user} id="imgThree"></img>
              </div>
              <div class="col" style={{ marginLeft: "-3rem" }}>
                {" "}
                7.5 Million Registered Users
              </div>
            </div>
            <div class="col">
              <div class="col">
                <img src={distribution} id="imgFour"></img>
              </div>
              <div class="col">Easy Return&Exchange Policy</div>
            </div>
            <div class="col">
              <div class="col">
                <img src={truck} id="imgFive"></img>
              </div>
              Free Shipping Available Above RS.699
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row head">CATEGORIES</div>
              <div class="row">Clothing & Fashion</div>
              <div class="row">Toys</div>
              <div class="row">Books & CDs</div>
              <div class="row">School Supplies</div>
              <div class="row">Birthday Party Supplies</div>
              <div class="row">Baby Diapering</div>
              <div class="row">Feeding & Nursing</div>
              <div class="row">Bath & Skin Care</div>
              <div class="row">Health & Safety</div>

              <div class="row">Baby Gear</div>
              <div class="row">Nursery</div>
              <div class="row">Moms & Maternity</div>
              <div class="row">Gifts</div>
              <div class="row">Precchool Admissions</div>

              <div class="row head headgap">COMPANY INFO</div>
              <div class="row">About Us</div>
              <div class="row">Contact US</div>
              <div class="row">F.A.Q.s</div>
              <div class="row">FirstCry Stores &Playschool</div>
            </div>
            <div class="col">
              <div class="row head">FIRSTCRY PARENTING</div>
              <div class="row">Getting Pregnant</div>
              <div class="row">Baby</div>
              <div class="row">Toddler</div>
              <div class="row">Preschooler</div>
              <div class="row">Big Kid</div>
              <div class="row">Vaccination</div>
              <div class="row">Growth Tracker</div>
              <div class="row">Baby Names</div>
              <div class="row">FirstCry Parenting Youtube</div>
              <div class="row">Coloring Pages</div>
              <div class="row head">REGIONAL PARENTING</div>
              <div class="row">FirstCry Hindi Parenting</div>
              <div class="row">FirstCry Marathi Parenting</div>
              <div class="row">FirstCry Bangla Parenting</div>
              <div class="row">FirstCry Arabia Parenting</div>
              <div class="row">FirstCry UAE Parenting</div>
              <div class="row head">OUR OTHER WEBSITES</div>
              <div class="row">GlobalBees Shopping</div>
            </div>
            <div class="col">
              <div class="row head">SHIPPING & POLICIES</div>
              <div class="row">Payments</div>
              <div class="row">Shipping Policy</div>
              <div class="row">Return & Replacement Policy</div>
              <div class="row">Cancellation Policy</div>
              <div class="row">Terms Of Use</div>
              <div class="row">Privacy Policy</div>
              <div class="row">Growth Tracker</div>
              <div class="row">Next day & Same day delivery</div>
              <div class="row">Responsible Disclosure</div>
              <div class="row head">SHIPPING & POLICIES</div>
              <div class="row">Payments</div>
              <div class="row head">PAYMENT METHOD</div>
              <div class="row">credit Cards</div>
              <div class="row">Net Banking</div>
              <div class="row">ATM & Debit Cards</div>
              <div class="row">COD (Cash On Delivery)</div>
              <div class="row">Easy EMI</div>
              <div class="row head">CONNECT WITH US</div>
              <div class="row">
                <div class="col">
                  <img src={facebook} id="facebookLogo"></img>
                </div>
                <div class="col">
                  <img src={twitter} id="twitterLogo"></img>
                </div>
                <div class="col">
                  <img src={instagram} id="instagramLogo"></img>
                </div>
                <div class="col">
                  <img src={youtube} id="youtubeLogo"></img>
                </div>
              </div>
              <div class="row">Testimonials</div>
              <div class="row">SITE MAP</div>
              <div class="row">LOYALTY CASH</div>
            </div>
            <div class="col">
              <div class="row head">OUR APPS</div>
              <div class="row">FirstCry India Shopping & Parenting</div>
              <div class="row">FirstCry India Shopping & Parenting ios</div>
              <div class="row head">LEARNING & EDUCATION</div>
              <div class="row">Intellikits</div>
              <div class="row head">SHOP INTERNATIONAL</div>
              <div class="row">FirstCry UAE</div>
              <div class="row">FirstCry KSA</div>
              <div class="row">FirstCry KSA(English)</div>
              <div class="row">FirstCry Arabia:Shopping & Parenting</div>
              <div class="row">FirstCry Arabia:Shopping & Parentingios</div>

              <div class="row head">KIDS LEARNING & EDUCATIONAL APPS</div>
              <div class="row">PlayBees:Kids Learning &Education App</div>
              <div class="row">PlayBees:123 Kids</div>
              <div class="row">Numbers App</div>
              <div class="row">Intellikits</div>
              <div class="row">PlayBees:ABC For Kids</div>
              <div class="row">FirstCry UAE</div>
              <div class="row">FirstCry KSA</div>
              <div class="row">FirstCry KSA(English)</div>
              <div class="row">FirstCry Arabia:Shopping & Parenting</div>
              <div class="row">FirstCry Arabia:Shopping & Parentingios</div>
            </div>
            <div class="row" id="copyright">
              © 2010-2022 www.FirstCry.com. All rights reserved. This website
              can be best viewed in resolution width of 1024 and above.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
