import React from "react";

/* Mutations */
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { getReservationsQuery } from "../../graphql/queries";
import TransactionRow from "../../pages/Transacation/TransactionRow";

const TransactionPage = (props) => {
  const datas = props.getReservationsQuery.reservations;

  let data = "";
  if (datas !== undefined) {
    data = <TransactionRow transactions={datas} />;
    // data = datas.map((data) => {
    //   let danger = "";
    //   if (data.referenceNo === "#RES2020517113637") {
    //     danger = (
    //       <a href="">
    //         <i className="fas fa-check text-success"></i>
    //       </a>
    //     );
    //   } else {
    //     danger = (
    //       <a href="">
    //         <i className="fas fa-times text-danger"></i>
    //       </a>
    //     );
    //     // <a href=""><i class="fas fa-cut"></i></a>
    //   }
    //   return (
    //     <tr key={data.id}>
    //       <td>{data.referenceNo}</td>
    //       <td>{data.reservationDate}</td>
    //       <td>{data.reservationTime}</td>
    //       <td>{data.service.service}</td>
    //       <td>{data.user.firstName + " " + data.user.lastName}</td>
    //       <td>{data.user.mobileNo}</td>
    //       <td>{danger}</td>
    //     </tr>
    //   );
    // });
  }

  return (
    <React.Fragment>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Reference No</th>
              <th>Reservation Date</th>
              <th>Reservation Time</th>
              <th>Service</th>
              <th>Name</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>{data ? data : null}</tbody>
          {/* <tbody>{data}</tbody> */}
        </table>
      </div>
    </React.Fragment>
  );
};

export default graphql(getReservationsQuery, { name: "getReservationsQuery" })(
  TransactionPage
);
