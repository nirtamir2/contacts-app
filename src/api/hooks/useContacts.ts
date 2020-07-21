import { useQuery } from "@apollo/client";

import { IContact } from "../../interfaces";
import { contactsQuery } from "../graphql/contactsQuery";

export function useContacts() {
  const { loading, error, data } = useQuery<{
    contacts: IContact[];
  }>(contactsQuery, {});
  return { loading, error, data };
}
