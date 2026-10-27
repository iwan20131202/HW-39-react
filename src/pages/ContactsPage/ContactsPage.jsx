import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";

import { fetchContacts } from "../../redux/operations";
import { getContactsCount } from "../../redux/selectors";

import { Layout, Sidebar, Card, Title, Count } from "./ContactsPage.styled";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const total = useSelector(getContactsCount);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Sidebar>
        <Card>
          <Title>Add contact</Title>
          <ContactForm />
        </Card>

        <Card>
          <Title>Search</Title>
          <SearchBox />
        </Card>
      </Sidebar>

      <Card>
        <Title>
          Contacts
          <Count>{total}</Count>
        </Title>
        <ContactList />
      </Card>
    </Layout>
  );
}
