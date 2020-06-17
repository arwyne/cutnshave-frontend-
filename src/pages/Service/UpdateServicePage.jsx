import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import UpdateServiceForm from "./UpdateServiceForm";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

/* Query */
import { graphql } from "react-apollo";
import { getSpecificServiceQuery } from "../../graphql/queries";

import { flowRight as compose } from "lodash";
import { updateServiceMutation } from "../../graphql/mutations";

const UpdateServicePage = (props) => {
  const [isRedirected, setIsRedirected] = useState(false);
  if (isRedirected) {
    return <Redirect to="/editservice" />;
  }
  const updateService = (e, updateOnService) => {
    e.preventDefault();
    // alert(
    //   updateOnService.id +
    //     updateOnService.service +
    //     updateOnService.description +
    //     updateOnService.price
    // );

    props
      .updateServiceMutation({
        variables: {
          id: updateOnService.id,
          service: updateOnService.service,
          description: updateOnService.description,
          price: parseInt(updateOnService.price),
        },
      })
      .then((response) => {
        const serviceAdded = response.data.updateService;

        if (serviceAdded) {
          Swal.fire({
            title: "Updated Service Successfully",
            icon: "success",
          }).then(() => {
            setIsRedirected(true);
          });
        }
      });
  };

  let data = "";
  if (data !== undefined) {
    data = (
      <UpdateServiceForm
        service={props.getSpecificServiceQuery.service}
        updateService={updateService}
      />
    );
  }

  return (
    <React.Fragment>
      <NavBar />
      {data}
      <Footer />
    </React.Fragment>
  );
};

export default compose(
  graphql(getSpecificServiceQuery, {
    name: "getSpecificServiceQuery",
    options: (props) => {
      return { variables: { id: props.match.params.serviceid } };
    },
  }),
  graphql(updateServiceMutation, {
    name: "updateServiceMutation",
  })
)(UpdateServicePage);
