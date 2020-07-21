import React from "react";
import { useNavigate } from "react-router";

import { useContacts } from "../api";
import { IContact } from "../interfaces";
import { Button, Input } from "../ui-core";
import { ContactItem } from "./ContactItem";

import "./ContactsScreen.css";

function isContactFieldsIncludeTerm(contact: IContact, searchTerm: string) {
  const fields: (keyof IContact)[] = [
    "firstName",
    "lastName",
    "phone",
    "email",
  ];
  return fields.some((f) =>
    contact[f]?.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  );
}

export function ContactsScreen() {
  const navigate = useNavigate();
  const { data, error, loading } = useContacts();
  // Better to use useDeferredValue if using React Concurrent Mode
  const [searchTerm, setSearchTerm] = React.useState("");

  function handleChangeSearchTerm(term: string) {
    setSearchTerm(term);
  }

  function handleNavigateToCreateContact() {
    navigate("new-contact");
  }

  function getFilteredContacts(contacts: IContact[]) {
    return contacts.filter((c) => {
      return (
        searchTerm.length === 0 || isContactFieldsIncludeTerm(c, searchTerm)
      );
    });
  }

  return (
    <div className="ContactsScreen">
      <div className="ContactsScreen__header">
        <div className="ContactsScreen__title">Contacts</div>
        <Button onClick={handleNavigateToCreateContact}>New</Button>
        <div className="ContactsScreen__input">
          <Input
            value={searchTerm}
            placeholder="Search contact"
            onChange={handleChangeSearchTerm}
          />
        </div>
      </div>
      <div className="ContactsScreen__contacts">
        {data == null
          ? null
          : getFilteredContacts(data.contacts).map((c) => {
              return (
                <ContactItem
                  key={c.id}
                  email={c.email}
                  firstName={c.firstName}
                  lastName={c.lastName}
                  phone={c.phone}
                />
              );
            })}
        {loading ? "Loading..." : null}
        {error ? "Error" : null}
      </div>
    </div>
  );
}
