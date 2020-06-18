import React from "react";
import moment from "moment";

const TransactionRow = ({ transactions, deleteReservation }) => {
  console.log(deleteReservation);
  let transaction = "";
  if (transactions !== undefined) {
    transaction = transactions.map((transaction) => {
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

      return (
        <tr key={transaction.id}>
          <td>{transaction.referenceNo}</td>
          <td>{moment(transaction.reservationDate).format("MMM Do YYYY")}</td>
          <td>{moment(transaction.reservationTime, "hh:mm").format("LT")}</td>
          <td>{transaction.service.service}</td>
          <td>
            {transaction.user.firstName + " " + transaction.user.lastName}
          </td>
          <td>{transaction.user.mobileNo}</td>
          <td>
            <i className="fas fa-check text-success trans-icons"></i>

            <i
              onClick={() => deleteReservation(transaction.id)}
              className="fas fa-times text-danger trans-icons"
            ></i>
          </td>
        </tr>
      );
    });
  }

  return <React.Fragment>{transaction}</React.Fragment>;
};

export default TransactionRow;
