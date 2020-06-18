import React from "react";
import { graphql } from "react-apollo";
import { getServicesQuery } from "../../graphql/queries.js";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Swal from "sweetalert2";

import { flowRight as compose } from "lodash";
import { deleteServiceMutation } from "../../graphql/mutations";
import UpdateServiceRow from "./UpdateServiceRow";

const UpdateServiceList = (props) => {
  const services = props.getServicesQuery.services;

  const deleteService = (id) => {
    props
      .deleteServiceMutation({
        variables: { id: id },
        refetchQueries: [{ query: getServicesQuery }],
      })
      .then((response) => {
        const serviceAdded = response.data.deleteService;

        if (serviceAdded) {
          Swal.fire({
            title: "Deleted Service Successfully",
            icon: "success",
          });
        }
      });
  };

  let service = "";
  if (services !== undefined) {
    service = services.map((service) => {
      return (
        <UpdateServiceRow
          deleteService={deleteService}
          service={service}
          key={service.id}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="fluid-container updatelist-main-container">
        <h3>Services</h3>
        <div className="hr-black"></div>
        <div>{service}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default compose(
  graphql(getServicesQuery, { name: "getServicesQuery" }),
  graphql(deleteServiceMutation, { name: "deleteServiceMutation" })
)(UpdateServiceList);
