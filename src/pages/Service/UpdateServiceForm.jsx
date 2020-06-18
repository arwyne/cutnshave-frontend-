import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import Swal from "sweetalert2";

/* Mutations */
import { graphql } from "react-apollo";
import { updateServiceMutation } from "../../graphql/mutations";

const UpdateServiceForm = (props) => {
  let returnService = "";
  let returnDescription = "";
  let returnPrice = "";
  let returnFile = "";
  let returnId = "";

  const returnData = props.service;
  if (returnData !== undefined) {
    returnService = returnData.service;
    returnDescription = returnData.description;
    returnPrice = returnData.price;
    returnFile = returnData.image;
    returnId = returnData.id;
  }

  const [service, setService] = useState(returnService);
  const [description, setDescription] = useState(returnDescription);
  const [price, setPrice] = useState(returnPrice);

  const updateOnService = {
    id: returnId,
    service: service,
    description: description,
    price: price,
  };

  return (
    <React.Fragment>
      <div className="container-fluid updateservice-main-container">
        <div className="row updateservice-container">
          <div className="updateservice-header">
            <h3>Update Service</h3>
            <div className="hr-black"></div>
          </div>
          <div className="row updateservice-body">
            <div className="updateform-image-container col-lg-5 offset-lg-1">
              <img src={returnFile} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <form onSubmit={(e) => props.updateService(e, updateOnService)}>
                <div className="form-group">
                  <label htmlFor="">Service</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    onChange={(e) => setService(e.target.value)}
                    defaultValue={returnService}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Description</label>
                  <textarea
                    required
                    className="form-control"
                    name=""
                    id=""
                    cols="15"
                    rows="5"
                    onChange={(e) => setDescription(e.target.value)}
                    defaultValue={returnDescription}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input
                    required
                    className="form-control"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    defaultValue={returnPrice}
                  />
                </div>

                <button className="btn form-btn" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default graphql(updateServiceMutation, {
  name: "updateServiceMutation",
})(UpdateServiceForm);
