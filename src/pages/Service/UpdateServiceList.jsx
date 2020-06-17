import React from "react";
import { graphql } from "react-apollo";
import { getServicesQuery } from "../../graphql/queries.js";
import NavBar from "../../components/NavBar";

import { flowRight as compose } from "lodash";
import { deleteServiceMutation } from "../../graphql/mutations";
import UpdateServiceRow from "./UpdateServiceRow";

const UpdateServiceList = (props) => {
  const services = props.getServicesQuery.services;

  const deleteService = (id) => {
    props.deleteServiceMutation({
      variables: { id: id },
      refetchQueries: [{ query: getServicesQuery }],
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
      <div className="container">
        <div>{service}</div>
      </div>
    </React.Fragment>
  );
};

export default compose(
  graphql(getServicesQuery, { name: "getServicesQuery" }),
  graphql(deleteServiceMutation, { name: "deleteServiceMutation" })
)(UpdateServiceList);
