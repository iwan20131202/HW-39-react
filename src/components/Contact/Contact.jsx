import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { Button } from "../Button/Button";

import { deleteContact } from "../../redux/operations";

import { ContactItem, Info, Name, PhoneLink } from "./Contact.styled";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <Info>
        <Name>{contact.name}</Name>
        <PhoneLink href={`tel:${contact.number}`}>{contact.number}</PhoneLink>
      </Info>

      <Button variant="danger" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
