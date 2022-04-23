import "./index.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/Body/Body";
import banner from "./images/banner.JPG";
import ScrollToTopBtn from "./components/Body/ScrollToTopBtn";
import { Routes, Route } from "react-router-dom";
import Card1 from "./components/Links/Card1";
import Card2 from "./components/Links/Card2";
import Card3 from "./components/Links/Card3";
import Card4 from "./components/Links/Card4";
import Card5 from "./components/Links/Card5";
import Card6 from "./components/Links/Card6";
import Card7 from "./components/Links/Card7";
import Card8 from "./components/Links/Card8";
import Card9 from "./components/Links/Card9";
import Card10 from "./components/Links/Card10";
import Card11 from "./components/Links/Card11";
import Card12 from "./components/Links/Card12";
import Card13 from "./components/Links/Card13";
import Card14 from "./components/Links/Card14";
import Card15 from "./components/Links/Card15";
import Card16 from "./components/Links/Card16";
import Card17 from "./components/Links/Card17";
import Card18 from "./components/Links/Card18";
import Card19 from "./components/Links/Card19";
import Card20 from "./components/Links/Card20";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar></Navbar>
              <img src={banner} className="image"></img>
              <h1 className="recommendationLabel">Fresh recommendations</h1>
              <Body />
              <ScrollToTopBtn></ScrollToTopBtn>
            </>
          }
        ></Route>
        <Route path="/Card1" element={<Card1 />}></Route>
        <Route path="/Card2" element={<Card2 />}></Route>
        <Route path="/Card3" element={<Card3 />}></Route>
        <Route path="/Card4" element={<Card4 />}></Route>
        <Route path="/Card5" element={<Card5 />}></Route>
        <Route path="/Card6" element={<Card6 />}></Route>
        <Route path="/Card7" element={<Card7 />}></Route>
        <Route path="/Card8" element={<Card8 />}></Route>
        <Route path="/Card9" element={<Card9 />}></Route>
        <Route path="/Card10" element={<Card10 />}></Route>
        <Route path="/Card11" element={<Card11 />}></Route>
        <Route path="/Card12" element={<Card12 />}></Route>
        <Route path="/Card13" element={<Card13 />}></Route>
        <Route path="/Card14" element={<Card14 />}></Route>
        <Route path="/Card15" element={<Card15 />}></Route>
        <Route path="/Card16" element={<Card16 />}></Route>
        <Route path="/Card17" element={<Card17 />}></Route>
        <Route path="/Card18" element={<Card18 />}></Route>
        <Route path="/Card19" element={<Card19 />}></Route>
        <Route path="/Card20" element={<Card20 />}></Route>
      </Routes>
    </React.Fragment>
  );
}
