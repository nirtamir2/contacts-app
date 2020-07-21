import {
  ContactsQueryDocument,
  ContactsQueryQuery,
  useAddContactMutation,
} from "../graphql-generated/graphql";

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
      const contactsCache = cache.readQuery<ContactsQueryQuery>({
        query: ContactsQueryDocument,
      });
      cache.writeQuery({
        query: ContactsQueryDocument,
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
