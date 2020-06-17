import React from "react";
import { Link } from "react-router-dom";

const UpdateServiceRow = ({ service, deleteService }) => {
  return (
    <React.Fragment>
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
          <Link to={"/editservice/" + service.id}>
            <button>Update</button>
          </Link>
          <button
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
