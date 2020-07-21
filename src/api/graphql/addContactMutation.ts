import { gql } from "@apollo/client";

export const addContactMutation = gql`
  mutation addContact(
    $firstName: String!
    $lastName: String!
    $phone: String
    $email: String
  ) {
    addContact(
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      email: $email
    ) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`;
