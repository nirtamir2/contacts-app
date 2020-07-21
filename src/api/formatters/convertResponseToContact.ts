import { IContact } from "../../interfaces";
import { Contact } from "../graphql-generated/graphql";

export function convertResponseToContact(response: Contact): IContact {
  return {
    ...response,
    email: response.email == null ? undefined : response.email,
    phone: response.phone == null ? undefined : response.phone,
  };
}
