import ApolloReactHooks from "@apollo/client";

import { convertResponseToContact } from "../formatters/convertResponseToContact";
import {
  ContactsQueryQuery,
  ContactsQueryQueryVariables,
  useContactsQueryQuery,
} from "../graphql-generated/graphql";

export function useContacts(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ContactsQueryQuery,
    ContactsQueryQueryVariables
  >
) {
  const { data, loading, error } = useContactsQueryQuery(baseOptions);
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
