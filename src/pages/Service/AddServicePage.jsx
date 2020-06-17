import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

/* http request */
import axios from "axios";

/* Mutations */
import { graphql } from "react-apollo";
import { addServiceMutation } from "../../graphql/mutations";

const AddServicePage = (props) => {
  // file upload
  const [file, setFile] = useState("");

  // form
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  if (redirectToHome) {
    return <Redirect to="/" />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://localhost:4000/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const { filePath } = res.data;

    props
      .addServiceMutation({
        variables: {
          service: service,
          description: description,
          price: parseInt(price),
          image: filePath,
        },
      })
      .then((response) => {
        const serviceAdded = response.data.addService;

        if (serviceAdded) {
          Swal.fire({
            title: "Added Service Successfully",
            icon: "success",
          }).then(() => {
            setRedirectToHome(true);
          });
        }
      });
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="fluid-container add-service-main-container">
        <div className="col-lg-4 offset-lg-4">
          <div className="add-service-container">
            <div className="row add-service-header">
              <h3>Add Service</h3>
            </div>
            <div className="hr-black"></div>
          </div>
          <div className="row add-service-body">
            <div className="col">
              <form onSubmit={onSubmit} className="add-form">
                <div className="form-group">
                  <label htmlFor="">Service:</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    onChange={(e) => setService(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Description:</label>
                  <textarea
                    required
                    className="form-control"
                    name=""
                    id=""
                    cols="15"
                    rows="5"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="">Price:</label>
                  <input
                    required
                    className="form-control"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="from-group">
                  <label htmlFor="">Image:</label>
                  <input
                    required
                    type="file"
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="form-control"
                  />
                </div>
                <div className="btn-container">
                  <button type="submit" className="btn btn-block form-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default graphql(addServiceMutation, { name: "addServiceMutation" })(
  AddServicePage
);
