import { convertResponseToContact } from "../formatters/convertResponseToContact";
import { useContactsQuery } from "../graphql-generated/graphql";

export function useContacts() {
  const { data, loading, error } = useContactsQuery();
  const formattedData = data?.contacts
    ?.filter((c) => c != null)
    .map((c) => convertResponseToContact(c!));
  return {
    data: formattedData,
    loading,
    error,
  };
}
