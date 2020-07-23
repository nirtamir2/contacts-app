import ApolloReactHooks from "@apollo/client";

import { convertResponseToContact } from "../formatters/convertResponseToContact";
import {
  ContactsQuery,
  ContactsQueryVariables,
  useContactsQuery,
} from "../graphql-generated/graphql";

export function useContacts(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ContactsQuery,
    ContactsQueryVariables
  >
) {
  const { data, loading, error } = useContactsQuery(baseOptions);
  const formattedData =
    data == null
      ? null
      : data.contacts
          ?.filter((c) => c != null)
          .map((c) => convertResponseToContact(c!));
  return {
    data: formattedData,
    loading,
    error,
  };
}
