import React from "react";

const TransactionRow = ({ transactions }) => {
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
          <td>{transaction.reservationDate}</td>
          <td>{transaction.reservationTime}</td>
          <td>{transaction.service.service}</td>
          <td>
            {transaction.user.firstName + " " + transaction.user.lastName}
          </td>
          <td>{transaction.user.mobileNo}</td>
          <td>
            <button>Approve</button>
            <button>Delete</button>
          </td>
        </tr>
      );
    });
  }

  return <React.Fragment>{transaction}</React.Fragment>;
};

export default TransactionRow;
