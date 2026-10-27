import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";
import { Loader } from "../Loader/Loader";

import {
  getVisibleContacts,
  getContactsCount,
  getIsLoading,
  getError,
} from "../../redux/selectors";

import { List, Notice } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const total = useSelector(getContactsCount);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <>
      {isLoading && <Loader />}

      {error && <Notice $error>Error: {error}</Notice>}

      {!isLoading && !error && total === 0 && (
        <Notice>Your phonebook is empty. Add the first contact.</Notice>
      )}

      {total > 0 && contacts.length === 0 && (
        <Notice>No contacts match your search.</Notice>
      )}

      <List>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};
