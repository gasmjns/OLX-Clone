import React, { useState } from "react";
import classes from "./Card1.module.css";
import Navbar from "../navbar/Navbar";
import Img12 from "../../images/Img12.webp";
import LinksFooter from "./LinksFooter";

export default function Card1() {
  const [num, setNum] = useState("** *** ****");
  const [clicked, setClicked] = useState(false);

  const NumberStyle = {
    color: "black",
    top: "170px",
    left: "118px",
  };
  const ClickedNumberStyle = {
    color: "blue",
    fontSize: "10px",
    top: "175px",
    left: "118px",
    textDecoration: "underline",
  };
  const labelledStyle = {
    color: "blue",
    textDecoration: "underline",
    top: "175px",
    left: "200px",
    fontSize: "10px",
    fontWeight: "550px",
  };
  const ClickedLabelStyle = {
    display: "none",
  };
  return (
    <div>
      <Navbar />
      <div className={classes.categoryDiv}>
        <label className={classes.category}>
          Home... / Electronics & Home Appliances... / Kitchen Appliances... /
          Kitchen... Appliances in Punjab... / Kitchen Appliances in Sialkot...
        </label>
      </div>
      <div className={classes.imgDiv}>
        <img alt="Image" src={Img12} className={classes.img}></img>
      </div>
      <div className={classes.priceDiv}>
        <h1>Rs 2,750,000</h1>
        <h5>1 Kanal Facing Park Beautiful Location</h5>
        <h4>Gulberg 3, Lahore</h4>
        <h6>4 weeks ago</h6>
      </div>
      <div className={classes.sellerDiv}>
        <h3>Seller Description</h3>
        <img
          src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
          className={classes.userIcon}
        ></img>
        <svg
          width="26"
          height="26"
          viewBox="0 0 1024 1024"
          className={classes.phoneIcon}
        >
          <path d="M784.55 852.4c-331.43-14.64-598.31-281.52-612.94-612.95l149.97-60 91.69 183.43-71 35.5v26.45c0 141.66 115.25 256.9 256.9 256.9h26.45l11.86-23.64 23.68-47.36 183.38 91.74-59.99 149.93zM918.1 643.45L661.16 514.99l-57.47 19.2-30.04 60.03c-74.07-11.1-132.73-69.8-143.87-143.87l60.08-30.04L509 362.88 380.6 105.94l-54.2-20.6-214.18 85.63-26.88 39.8c0 401.37 326.57 727.9 727.94 727.9l39.76-26.88 85.64-214.19-20.61-54.19z"></path>
        </svg>
        <h2>Khan and Associates</h2>
        <h6>Member since November, 2021</h6>
        <div className={classes.chatDiv}>Chat with seller</div>
        <a style={!clicked ? NumberStyle : ClickedNumberStyle}>{num}</a>
        <label
          onClick={() => {
            setNum("+923031212921");
            setClicked(true);
          }}
          style={!clicked ? labelledStyle : ClickedLabelStyle}
        >
          Show number
        </label>
      </div>
      <div className={classes.locationDiv}>
        <h1>Posted in</h1>
        <h5>Faisalabad, Punjab</h5>
        <div className={classes.imgDivKaBaap}>
          <div className={classes.imageDiv}>
            <img
              src="https://www.olx.com.pk/assets/mapPlaceholder_noinline.af3a4b7300a65b66f974eed7023840ac.svg"
              alt="location"
            />
          </div>
          <h2>See Location</h2>
          <i className={classes.arrow}></i>
        </div>
      </div>
      <div className={classes.descriptionDiv}>
        <table className={classes.mainTable}>
          <tr>
            <th>Price</th>
            <td>2,750,000</td>
          </tr>
          <tr>
            <th>Condition</th>
            <td>New</td>
          </tr>
        </table>
        <table className={classes.secTable}>
          <tr>
            <th>Type</th>
            <td>House</td>
          </tr>
        </table>
        <hr className={classes.hr}></hr>
        <h3>Description</h3>
        <a>
          1 canal house, newly built with premium location, 3 bedrooms with
          attached bathrooms, a lawn and a fancy kitchen with marble ceiling.
        </a>
      </div>
      <LinksFooter></LinksFooter>
    </div>
  );
}
