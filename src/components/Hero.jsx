import React from "react";
import img1 from "../images/avi-waxman-f9qZuKoZYoY-unsplash.jpg";
import img2 from "../images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import img3 from "../images/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg";
import img4 from "../images/jason-briscoe-UV81E0oXXWQ-unsplash.jpg";
import img5 from "../images/jason-dent-w3eFhqXjkZE-unsplash.jpg";
import img6 from "../images/ronnie-george-9gGvNWBeOq4-unsplash.jpg";
import img7 from "../images/webaliser-_TPTXZd9mOo-unsplash.jpg";
import img8 from "../images/josh-withers-HB9oXw7TPEM-unsplash.jpg";
import airbnbLogo from "../images/airbnb-logo.png";

export default function Hero() {
  return (
    <section className="hero-container">
      <img className="hero-logo" src={airbnbLogo} alt="airbnb-logo" />
      <div className="hero">
        <img src={img1} alt="hero-img" />
        <img src={img2} alt="hero-img" />
        <img src={img3} alt="hero-img" />
        <img src={img4} alt="hero-img" />
        <img src={img5} alt="hero-img" />
        <img src={img6} alt="hero-img" />
        <img src={img7} alt="hero-img" />
        <img src={img8} alt="hero-img" />
      </div>
      <div className="hero-text">
        <h1 className="hero-title">Nº1 online marketplace</h1>
        <h3>Short-term homestays and experiences all around the world.</h3>
        <p>
          Airbnb, Inc. is an American San Francisco-based company. The company
          acts as a broker and charges a commission from each booking. The
          company was founded in 2008 by Brian Chesky, Nathan Blecharczyk, and
          Joe Gebbia.
        </p>
      </div>
    </section>
  );
}
