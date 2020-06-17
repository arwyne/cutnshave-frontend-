import React from "react";
import NavBar from "../../components/NavBar";

/* Mutations */
import { graphql } from "react-apollo";
// import { getMoviesQuery } from "../../graphql/queries";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Barbershop</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
