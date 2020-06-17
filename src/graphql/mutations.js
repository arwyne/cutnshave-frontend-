import { gql } from "apollo-boost";

const addUserMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
    $mobileNo: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
      mobileNo: $mobileNo
    ) {
      firstName
      lastName
      email
      username
      mobileNo
    }
  }
`;

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      role
      token
    }
  }
`;

const addServiceMutation = gql`
  mutation(
    $service: String!
    $description: String!
    $price: Int!
    $image: String!
  ) {
    addService(
      service: $service
      description: $description
      price: $price
      image: $image
    ) {
      service
      description
      price
      image
    }
  }
`;

const updateServiceMutation = gql`
  mutation($id: ID!, $service: String!, $description: String!, $price: Int!) {
    updateService(
      id: $id
      service: $service
      description: $description
      price: $price
    ) {
      id
      service
      description
      price
      image
    }
  }
`;

const deleteServiceMutation = gql`
  mutation($id: ID!) {
    deleteService(id: $id) {
      id
    }
  }
`;

const addReservationMutation = gql`
  mutation(
    $referenceNo: String!
    $reservationDate: String!
    $reservationTime: String!
    $totalPrice: Int!
    $userId: ID!
    $serviceId: ID!
  ) {
    addReservation(
      referenceNo: $referenceNo
      reservationDate: $reservationDate
      reservationTime: $reservationTime
      totalPrice: $totalPrice
      userId: $userId
      serviceId: $serviceId
    ) {
      referenceNo
      reservationDate
      reservationTime
      totalPrice
      userId
      serviceId
    }
  }
`;

export {
  addUserMutation,
  loginMutation,
  addServiceMutation,
  updateServiceMutation,
  deleteServiceMutation,
  addReservationMutation,
};
