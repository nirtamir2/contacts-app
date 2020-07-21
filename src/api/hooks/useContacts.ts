import { useQuery } from "@apollo/client";
import { contactsQuery } from "../graphql/contactsQuery";
import { IContact } from "../../interfaces";

export function useContacts() {
  const { loading, error, data } = useQuery<{
    contacts: IContact[];
  }>(contactsQuery, {});
  return { loading, error, data };
}
