import crane from "../assets/crane.svg";
import digger from "../assets/digger.svg";
import pencil from "../assets/pencil.svg";
import google from "../assets/google.svg";
import star from "../assets/star.svg";
import ContactForm from "./ContactForm";
import cozyhouse from "../assets/Images/cozyhouse.webp";

import { useEffect, useState } from "react";

export default function MainSection() {
  const [openNav, setOpenNav] = useState("hamburger hamburger--3dx");
  let formOpen = openNav === "hamburger hamburger--3dx" ? true : false;
  const handleNav = () => {
    setOpenNav((prevNav) =>
      prevNav.includes("is-active")
        ? "hamburger hamburger--3dx"
        : "hamburger hamburger--3dx is-active"
    );
  };

  return (
    <section className="darkgreen">
      <nav className="secondary-nav">
        <div className="fsb">
          <p className="logo">
            <span>Horizon</span> Architects.
            <br />
            Architectes <span className="grey">de</span> l'Horizon.
          </p>

          <ul className="nav-links bigscreen">
            <li>Team</li>
            <li>Projects</li>
            <li>About Us</li>
            <li className="small ash" onClick={handleNav}>Contact</li>
          </ul>

          <div className="smallscreen">
            <div className={openNav} onClick={handleNav}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="iv-border"></div>
      </nav>

      <main className="curve-wrapper">
        <h1>
          Reachable <i className="grey">specialists</i> for architectural{" "}
          <i className="grey">demands.</i>
        </h1>
        <p className="small-title">Expertise, experience in your sector</p>
        <div className="btn-container">
          <button>Learn More</button>
        </div>
        {!formOpen && (
          <div className="relative">
            <ContactForm handleNav={handleNav} />
          </div>
        )}
        <div className="hero">
          <div className="hero-content">
            <h1>Crafting High-end Homes</h1>
            <p>
              Providing construction and consultation services across Nigeria.
            </p>
            <button onClick={handleNav}>Start a project</button>
            <div className="google-div">
              <div>
                <img src={google} alt="Google reviews" />
              </div>
              <div>
                <span>Google reviews</span>
                <div className="flex">
                  <img className="star" src={star} alt="Star rating" />
                  <img className="star" src={star} alt="Star rating" />
                  <img className="star" src={star} alt="Star rating" />
                  <img className="star" src={star} alt="Star rating" />
                  <h6>4/5</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gas-up-grid">
          <div className="gas-up">
            <img className="svg" src={crane} alt="Crane icon" />
            <h3 className="grey">Specialists</h3>
            <p>
              Our conscious focus means that we know the industry and the market
              well and are always aware of developments.
            </p>
          </div>
          <div className="gas-up">
            <img className="svg" src={digger} alt="Digger icon" />
            <h3 className="grey">Accessible</h3>
            <p>
              Fast and adequate action is crucial, which is why you contact one
              of our lawyers directly.
            </p>
          </div>
          <div className="gas-up">
            <img className="svg" src={pencil} alt="Pencil icon" />
            <h3 className="grey">Enterprising</h3>
            <p>
              We do everything we can to help you move forward and dare to think
              outside the legal framework. We are decisive and take
              responsibility.
            </p>
          </div>
        </div>
      </main>

      <section className="white">
        <div className="grid1">
          <div>
            <span>Our Mission</span>
          </div>
          <div>
            <h2>
              We serve all <i>real estate </i> specialties
            </h2>
            <p className="text-container">
              We use our real estate specializations integrally by coordinating
              different parts of a project. We advise and litigate on all phases
              in which a real estate object can be: from idea to initiative,
              development to realization and from exploitation to redevelopment.
            </p>
          </div>
        </div>

        <div className="grid1 grid2">
          <div>
            <span>Our Values</span>
            <h2>
              We serve all <i>real estate </i> specialties
            </h2>
            <p className="text-container">
              We use our real estate specializations integrally by coordinating
              different parts of a project. We advise and litigate on all phases
              in which a real estate object can be: from idea to initiative,
              development to realization and from exploitation to redevelopment.
            </p>
          </div>
          <div className="flex-end img-div">
            <img className="round-border" src={cozyhouse} alt="Cozy house" />
          </div>
        </div>
      </section>
    </section>
  );
}
