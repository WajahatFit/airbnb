import React from "react";
import tenent from "../images/andrea-davis-IWfe63thJxk-unsplash.jpg";
import tenent2 from "../images/meritt-thomas-_YxDGcDm4Hs-unsplash.jpg";
import tenent3 from "../images/benjamin-suter-S-x1RbdoCtU-unsplash.jpg";
import tenent4 from "../images/karsten-winegeart-sStahKEhT9w-unsplash.jpg";
import tenent5 from "../images/andrea-davis-IWfe63thJxk-unsplash.jpg";
import star from "../images/star.png";
export default function Card() {
  return (
    <>
      <div className="card">
        <img src={tenent} alt="card-img" className="card--img" />
        <div className="card--stats">
          <img src={star} alt="star" />
          <span>5.0</span>
          <span className="grey">(6) ·</span>
          <span className="grey">SPAIN</span>
        </div>
        <p>Barcelona center</p>
        <p>
          <span className="bold">FROM 150€</span> / night
        </p>
      </div>
    </>
  );
}
