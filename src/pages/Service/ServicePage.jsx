import React from "react";
import { graphql } from "react-apollo";
import { getServicesQuery } from "../../graphql/queries.js";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

const ServicePage = (props) => {
  const services = props.getServicesQuery.services;

  let service = "";
  if (services !== undefined) {
    service = services.map((service) => {
      return (
        <div className="row service-container">
          <div className="col-lg-4">
            <img className="img-fluid" src={service.image} alt="" />
          </div>
          <div className="col-lg-4">
            <h4>{service.service}</h4>
            <p>{service.description}</p>
          </div>
          <div className="col-lg-2">
            <h6>{service.price}</h6>
          </div>
          <div className="col-lg-2">
            <Link to={"/reservation/" + service.id}>
              <button>Book</button>
            </Link>
          </div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container">{service}</div>
    </React.Fragment>
  );
};

export default graphql(getServicesQuery, { name: "getServicesQuery" })(
  ServicePage
);
