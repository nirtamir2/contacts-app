import { useMutation } from "@apollo/client";

import { IContact } from "../../interfaces";
import { addContactMutation } from "../graphql/addContactMutation";
import { contactsQuery } from "../graphql/contactsQuery";

type AddContactMutationVariablesT = Omit<IContact, "id">;

type AddContactMutationDataT = {
  addContact: IContact;
};

export function useCreateContact(options: { onCompleted: () => void }) {
  const { onCompleted } = options;
  const [createContact, { loading, error }] = useMutation<
    AddContactMutationDataT,
    AddContactMutationVariablesT
  >(addContactMutation, {
    update(cache, { data }) {
      if (data == null) return;
      const newContact = data.addContact;
      const contactsCache = cache.readQuery<{ contacts: IContact }>({
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
