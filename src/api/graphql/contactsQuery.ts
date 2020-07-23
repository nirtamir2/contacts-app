import { gql } from "@apollo/client";

export const contactsQuery = gql`
  query contacts {
    contacts {
      id
      email
      firstName
      lastName
      phone
    }
  }
`;
