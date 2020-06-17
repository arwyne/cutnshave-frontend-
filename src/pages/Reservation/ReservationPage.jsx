import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

/* Mutations */
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { addReservationMutation } from "../../graphql/mutations";
import { getSpecificServiceQuery } from "../../graphql/queries";

const ReservationPage = (props) => {
  const userId = localStorage.id;
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [redirectToProfile, setRedirectToProfile] = useState(false);

  if (redirectToProfile) {
    return <Redirect to="/" />;
  }

  let today = new Date();
  let date = today.getFullYear() + "" + today.getMonth() + "" + today.getDate();
  let time =
    today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
  let datetime = date + "" + time;
  let transactionCode = "#RES" + datetime;

  const serviceData = props.getSpecificServiceQuery.service;
  console.log(serviceData);
  let image = "";
  let service = "";
  let description = "";
  let price = "";
  if (serviceData !== undefined) {
    image = <img className="img-fluid" src={serviceData.image} alt="" />;
    service = <td>{serviceData.service}</td>;
    price = <td>&#8369;{serviceData.price}</td>;
    description = <td>{serviceData.description}</td>;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (serviceData !== undefined) {
      props
        .addReservationMutation({
          variables: {
            referenceNo: transactionCode,
            reservationDate: reservationDate,
            reservationTime: reservationTime,
            totalPrice: parseInt(serviceData.price),
            userId: userId,
            serviceId: serviceData.id,
          },
        })
        .then((response) => {
          // this is the callback query of addUser from graphql addUserMutation
          const reservationAdded = response.data.addReservation;

          if (reservationAdded) {
            Swal.fire({
              title: "Reservation Successful",
              text: "You will now be redirected to the login.",
              icon: "success",
            }).then(() => {
              setRedirectToProfile(true);
            });
          } else {
            Swal.fire({
              title: "Registration Failed",
              text: "The server encountered an error.",
              icon: "error",
            });
          }
        });
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="fluid-container reserve-main-container">
        <div className="row reserve-header">
          <h3>Reservation Form</h3>
        </div>
        <div className="hr-black"></div>
        <div className="row reserve-body">
          <div className="col-lg-5 offset-lg-0 col-md-6 offset-md-3 reserve-image">
            <div>{image}</div>
          </div>

          <div className="col-lg-6 reserve-form">
            <form onSubmit={(e) => onSubmit(e)}>
              <table className="table">
                <tr>
                  <td>
                    <label>Service:</label>
                  </td>
                  {service}
                </tr>

                <tr>
                  <td>
                    <label>Description:</label>
                  </td>
                  {description}
                </tr>

                <tr>
                  <td>
                    <label>Price:</label>
                  </td>
                  {price}
                </tr>

                <tr>
                  <td>
                    <label htmlFor="reservation-date">Reservation Date:</label>
                  </td>
                  <td>
                    <input
                      required
                      id="reservation-date"
                      type="date"
                      className="form-control"
                      onChange={(e) => setReservationDate(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="reservation-time">Reservation Time:</label>
                  </td>
                  <td>
                    <input
                      required
                      id="reservation-time"
                      type="time"
                      className="form-control"
                      onChange={(e) => setReservationTime(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <button className="form-btn" type="submit">
                      Confirm
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>

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
  graphql(addReservationMutation, { name: "addReservationMutation" })
)(ReservationPage);
