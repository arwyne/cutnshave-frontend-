import React from "react";
import { graphql } from "react-apollo";
import { getServicesQuery } from "../../graphql/queries.js";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const ServicePage = (props) => {
  const services = props.getServicesQuery.services;

  let service = "";
  if (services !== undefined) {
    service = services.map((service) => {
      return (
        <div key={service.id} className="row service-container">
          <div className="col-lg-3 offset-lg-1 col-md-6 offset-md-3">
            <img className="img-fluid" src={service.image} alt="" />
          </div>
          <div className="col-lg-3">
            <h4>{service.service}</h4>
            <div className="divider"></div>

            <p>{service.description}</p>
          </div>
          <div className="col-lg-2">
            <h5>&#8369;{service.price}</h5>
          </div>
          <div className="col-lg-2 service-btn-container">
            <Link to={"/reservation/" + service.id}>
              <button className="btn service-btn">Book</button>
            </Link>
          </div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="fluid-container service-main-container">
        <h3>Services</h3>
        <div className="hr-black"></div>
        {service}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default graphql(getServicesQuery, { name: "getServicesQuery" })(
  ServicePage
);
