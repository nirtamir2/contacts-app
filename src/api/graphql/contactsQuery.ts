import { gql } from "@apollo/client";

export const contactsQuery = gql`
  query contactsQuery {
    contacts {
      id
      email
      firstName
      lastName
      phone
    }
  }
`;
