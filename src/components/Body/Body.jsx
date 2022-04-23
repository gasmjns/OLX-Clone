import classes from "./Body.module.css";
import Card from "./Cards";
import Img2 from "../../images/Img2.webp";
import Img5 from "../../images/Img5.webp";
import Img6 from "../../images/Img6.webp";
import Img10 from "../../images/Img10.webp";
import Img11 from "../../images/Img11.webp";
import Img12 from "../../images/Img12.webp";
import Img15 from "../../images/Img15.webp";
import Img17 from "../../images/Img17.webp";
import Img18 from "../../images/Img18.webp";
import Img19 from "../../images/Img19.webp";
import Img20 from "../../images/Img20.webp";
import Img21 from "../../images/Img21.webp";
import Img23 from "../../images/Img23.webp";
import Img24 from "../../images/Img24.webp";
import Img28 from "../../images/Img28.webp";
import Img29 from "../../images/Img29.webp";
import Img30 from "../../images/Img30.webp";
import Img31 from "../../images/Img31.webp";
import footerBanner from "../../images/footerBanner.JPG";
import Footer from "./Footer";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Body() {
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("more");
  const [grid, setGrid] = useState({
    marginLeft: "100px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 240px)",
    gridTemplateRows: "repeat(6, 200px)",
    gridColumnGap: "7px",
    gridRowGap: "7px",
  });
  function showHandler() {
    setShow(!show);
    if (!show) {
      setGrid({
        marginLeft: "100px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 240px)",
        gridTemplateRows: "repeat(16, 200px)",
        gridColumnGap: "7px",
        gridRowGap: "7px",
      });
    } else if (show) {
      setGrid({
        marginLeft: "100px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 240px)",
        gridTemplateRows: "repeat(6, 200px)",
        gridColumnGap: "7px",
        gridRowGap: "7px",
      });
    }
    if (!show) {
      setBtnText("less");
    } else if (show) {
      setBtnText("more");
    }
  }
  return (
    <div className={classes.body}>
      <div style={grid}>
        <Card
          title={
            <NavLink to="/Card1" className={classes.title}>
              Home for Sale
            </NavLink>
          }
          Img={Img2}
          price="2,750,000"
          location="Gulberg 3, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card2" className={classes.title}>
              Digital Marketing Job
            </NavLink>
          }
          Img={Img5}
          price="45,000"
          location="Teen Talwaar, Karachi . 2 days ago"
        ></Card>
        <Card
          title={
            <NavLink to="/Card3" className={classes.title}>
              Book Shelf
            </NavLink>
          }
          Img={Img6}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card4" className={classes.title}>
              Black Sofa with Table
            </NavLink>
          }
          Img={Img10}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card5" className={classes.title}>
              Apple Airpods Pro
            </NavLink>
          }
          Img={Img11}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          title={
            <NavLink to="/Card6" className={classes.title}>
              HP Pavillion Tablet
            </NavLink>
          }
          Img={Img12}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card7" className={classes.title}>
              Medical Staff Required
            </NavLink>
          }
          Img={Img19}
          price="50,000 (salary)"
          location="Gulberg 3, Lahore . 4 weeks ago"
        ></Card>
        <Card
          title={
            <NavLink to="/Card8" className={classes.title}>
              Q Mobile Tablet
            </NavLink>
          }
          Img={Img17}
          price="30,000"
          location="Burj Chowk, Lahore . 4 weeks ago"
        ></Card>
        <Card
          title={
            <NavLink to="/Card9" className={classes.title}>
              Grockery
            </NavLink>
          }
          Img={Img18}
          price="8,000"
          location="Chowrangi, Karachi . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card10" className={classes.title}>
              Oppo A1 Pro
            </NavLink>
          }
          Img={Img15}
          price="62,000"
          location="DC Chowk, Bahawalpur . 3 months ago"
        ></Card>
        <Card
          title={
            <NavLink to="/Card11" className={classes.title}>
              Persian White Kitten
            </NavLink>
          }
          Img={Img20}
          price="33,000"
          location="Lake, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card12" className={classes.title}>
              VR Glasses
            </NavLink>
          }
          Img={Img21}
          price="94,000"
          location="DHA, Lahore . 4 weeks ago"
        ></Card>
        <Card
          title={
            <NavLink to="/Card13" className={classes.title}>
              Chipset
            </NavLink>
          }
          Img={Img23}
          price="6,000"
          location="Fayaz e Madina, Bhakkar . 4 days ago"
        ></Card>
        <Card
          title={
            <NavLink to="/Card14" className={classes.title}>
              Grockery
            </NavLink>
          }
          Img={Img24}
          price="27,000"
          location="Pakpattan . 4 months ago"
        ></Card>
        <Card
          title={
            <NavLink to="/Card14" className={classes.title}>
              Tech House Job
            </NavLink>
          }
          Img={Img28}
          price="76,000 (salary)"
          location="F-9, Islamabad . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card15" className={classes.title}>
              Meds for Furniture
            </NavLink>
          }
          Img={Img29}
          price="9,00"
          location="Numaish Chowk, Multan . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card16" className={classes.title}>
              Toy Piano for Babies
            </NavLink>
          }
          Img={Img30}
          price="4,500"
          location="Emporium, Lahore . 11 days ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card17" className={classes.title}>
              Residential Plot For Sale in White City
            </NavLink>
          }
          Img={Img31}
          price="2,750,000"
          location="Gulberg 3, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card18" className={classes.title}>
              Book Shelf
            </NavLink>
          }
          Img={Img6}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card19" className={classes.title}>
              Black Sofa with Table
            </NavLink>
          }
          Img={Img10}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          title={
            <NavLink to="/Card20" className={classes.title}>
              Apple Airpods Pro
            </NavLink>
          }
          style={!show ? { display: "none" } : { display: "flex" }}
          Img={Img11}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="HP Pavillion Tablet"
          Img={Img12}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Digital Marketing Job"
          Img={Img5}
          price="45,000"
          location="Teen Talwaar, Karachi . 2 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Book Shelf"
          Img={Img6}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Black Sofa with Table"
          Img={Img10}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Apple Airpods Pro"
          Img={Img11}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="HP Pavillion Tablet"
          Img={Img12}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Medical Staff Required"
          Img={Img19}
          price="50,000 (salary)"
          location="Gulberg 3, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Q Mobile Tablet"
          Img={Img17}
          price="30,000"
          location="Burj Chowk, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Grockery"
          Img={Img18}
          price="8,000"
          location="Chowrangi, Karachi . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Oppo A1 Pro"
          Img={Img15}
          price="62,000"
          location="DC Chowk, Bahawalpur . 3 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Home for sale"
          Img={Img2}
          price="2,750,000"
          location="Gulberg 3, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Digital Marketing Job"
          Img={Img5}
          price="45,000"
          location="Teen Talwaar, Karachi . 2 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Book Shelf"
          Img={Img6}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Black Sofa with Table"
          Img={Img10}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Apple Airpods Pro"
          Img={Img11}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="HP Pavillion Tablet"
          Img={Img12}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Medical Staff Required"
          Img={Img19}
          price="50,000 (salary)"
          location="Gulberg 3, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Q Mobile Tablet"
          Img={Img17}
          price="30,000"
          location="Burj Chowk, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Grockery"
          Img={Img18}
          price="8,000"
          location="Chowrangi, Karachi . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Oppo A1 Pro"
          Img={Img15}
          price="62,000"
          location="DC Chowk, Bahawalpur . 3 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Persian White Kitten"
          Img={Img20}
          price="33,000"
          location="Lake, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="VR Glasses"
          Img={Img21}
          price="94,000"
          location="DHA, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Chipset"
          Img={Img23}
          price="6,000"
          location="Fayaz e Madina, Bhakkar . 4 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Grockery"
          Img={Img24}
          price="27,000"
          location="Pakpattan . 4 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Tech House Job"
          Img={Img28}
          price="76,000 (salary)"
          location="F-9, Islamabad . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Home for sale"
          Img={Img2}
          price="2,750,000"
          location="Gulberg 3, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Digital Marketing Job"
          Img={Img5}
          price="45,000"
          location="Teen Talwaar, Karachi . 2 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Book Shelf"
          Img={Img6}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Black Sofa with Table"
          Img={Img10}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Apple Airpods Pro"
          Img={Img11}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="HP Pavillion Tablet"
          Img={Img12}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Medical Staff Required"
          Img={Img19}
          price="50,000 (salary)"
          location="Gulberg 3, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Q Mobile Tablet"
          Img={Img17}
          price="30,000"
          location="Burj Chowk, Lahore . 4 weeks ago"
        ></Card>
        <Card
          title="Grockery"
          Img={Img18}
          price="8,000"
          location="Chowrangi, Karachi . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Oppo A1 Pro"
          Img={Img15}
          price="62,000"
          location="DC Chowk, Bahawalpur . 3 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Persian White Kitten"
          Img={Img20}
          price="33,000"
          location="Lake, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="VR Glasses"
          Img={Img21}
          price="94,000"
          location="DHA, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Chipset"
          Img={Img23}
          price="6,000"
          location="Fayaz e Madina, Bhakkar . 4 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Grockery"
          Img={Img24}
          price="27,000"
          location="Pakpattan . 4 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Tech House Job"
          Img={Img28}
          price="76,000"
          location="F-9, Islamabad . 4 weeks ago"
          featured="yes"
        ></Card>
      </div>
      <div className={classes.showMore}>
        <button
          className={classes.showMoreBtn}
          style={{ color: "black" }}
          onClick={showHandler}
        >
          Load {btnText}
        </button>
      </div>
      <img src={footerBanner} className={classes.footerBanner}></img>
      <Footer></Footer>
    </div>
  );
}
