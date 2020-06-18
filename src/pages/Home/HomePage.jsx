import React from "react";
import NavBar from "../../components/NavBar";

import Footer from "../../components/Footer";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <NavBar />

      <div className="container-fluid">
        <div className="row home-header-row">
          <div className="col home-header-col">
            <img
              className="img-fluid home-logo"
              src="/images/logo-white.png"
              alt=""
            />
            <h1>Cut 'N' Shave</h1>
          </div>
        </div>

        <div className="row welcome-main-container">
          <div className="col-lg-6">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="/images/carousel1.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="/images/carousel2.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="/images/carousel3.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="col-lg-6 welcome-container">
            <div>
              <img
                className="img-fluid home-logo"
                src="/images/logo-black.png"
                alt=""
              />
            </div>
            <h2>Welcome to Cut 'N' Shave</h2>
            <div className="hr-black"></div>
            <p>
              Our barbershops were created to provide the modern gentleman with
              a top class, traditional barber experience. Our seasoned barbers
              will give you that expert cut or shave that you’ve been looking
              forward to all day. Also we do appointment services.
            </p>
            <a href="/service">
              <button className="btn book-btn">Book Now!</button>
            </a>
          </div>
        </div>

        <div className="row parallax">
          <h3>Redefining the Barbershop Experience</h3>
          <div className="hr"></div>
          <p>
            We’ve been providing the traditional barbershop experience by
            ­setting a venue where dudes can relax, and get groomed. Our
            approach is offering simple and straightforward services that are
            delivered well, and a vibe that is curated for the discerning man.
          </p>
        </div>

        {/* <div>HAIRCUT AND SHAVE WORKS
We pride ourselves in creating modern and unique, clean-cut appearances.
We offer precise techniques in our work with precision and perfection, take a look.</div> */}

        <h3 className="sub-heading">What We Do</h3>
        <div className="hr-black"></div>
        <div className="row do-main-container">
          <div className="col-lg-3 col-md-6 do-sub-container">
            <div className="do-container">
              <div>
                <img
                  className="img-fluid do-img"
                  src="/images/cut-icon.png"
                  alt=""
                />
              </div>
              <h6>Cuts</h6>
              <div className="divider"></div>
              <p>Skin fade or pompadour perhaps? All men's styles covered.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 do-sub-container">
            <div className="do-container">
              <div>
                <img
                  className="img-fluid do-img"
                  src="/images/shave-icon.png"
                  alt=""
                />
              </div>
              <h6>Shaves</h6>
              <div className="divider"></div>
              <p>
                Classic cut-throat shave or custom bear shaping to your liking.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 do-sub-container">
            <div className="do-container">
              <div>
                <img
                  className="img-fluid do-img"
                  src="/images/wash-icon.png"
                  alt=""
                />
              </div>
              <h6>Washes</h6>
              <div className="divider"></div>
              <p>
                Stay fresh and add an express facial or hair wash to your cut.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 do-sub-container">
            <div className="do-container">
              <div>
                <img
                  className="img-fluid do-img"
                  src="/images/package-icon.png"
                  alt=""
                />
              </div>
              <h6>Packages</h6>
              <div className="divider"></div>
              <p>Feeling Ugly? Lock in a tailored hair and beard package.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
