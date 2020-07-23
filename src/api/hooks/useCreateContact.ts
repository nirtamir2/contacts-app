import {
  ContactsQuery,
  useAddContactMutation,
} from "../graphql-generated/graphql";
import { contactsQuery } from "../graphql/contactsQuery";

export function useCreateContact(options: { onCompleted: () => void }) {
  const { onCompleted } = options;

  const [createContact, { loading, error }] = useAddContactMutation({
    optimisticResponse(variables) {
      return {
        addContact: {
          id: `${Date.now()}`,
          ...variables,
        },
      };
    },
    update(cache, { data }) {
      if (data == null) return;
      const newContact = data.addContact;
      const contactsCache = cache.readQuery<ContactsQuery>({
        query: contactsQuery,
      });
      cache.writeQuery({
        query: contactsQuery,
        data: {
          contacts: [
            ...(contactsCache == null ? [] : contactsCache.contacts),
            newContact,
          ],
        },
      });
    },
    onCompleted() {
      if (onCompleted != null) {
        onCompleted();
      }
    },
  });

  return { createContact, loading, error };
}
