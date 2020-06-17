import { gql } from "apollo-boost";
import { GraphQLObjectType } from "graphql";

const getServicesQuery = gql`
  {
    services {
      id
      service
      description
      price
      image
    }
  }
`;

const getSpecificServiceQuery = gql`
  query($id: ID!) {
    service(id: $id) {
      id
      service
      description
      price
      image
    }
  }
`;

const getReservationsQuery = gql`
  {
    reservations {
      id
      referenceNo
      reservationDate
      reservationTime
      totalPrice
      user {
        firstName
        lastName
        mobileNo
      }
      service {
        service
      }
    }
  }
`;

export { getServicesQuery, getSpecificServiceQuery, getReservationsQuery };
