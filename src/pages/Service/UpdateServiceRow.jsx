import React from "react";
import { Link } from "react-router-dom";

const UpdateServiceRow = ({ service, deleteService }) => {
  return (
    <React.Fragment>
      <div className="row service-container">
        <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3">
          <img className="img-fluid" src={service.image} alt="" />
        </div>
        <div className="col-lg-4">
          <h4>{service.service}</h4>
          <p>{service.description}</p>
        </div>
        <div className="col-lg-2">
          <h5>&#8369;{service.price}</h5>
        </div>
        <div className="col-lg-2">
          <Link to={"/editservice/" + service.id}>
            <button className="btn update-btn">Update</button>
          </Link>
          <button
            className="btn delete-btn"
            onClick={() => {
              deleteService(service.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateServiceRow;
