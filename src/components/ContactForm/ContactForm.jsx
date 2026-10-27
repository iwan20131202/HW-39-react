import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";

import { addContact } from "../../redux/operations";
import { getContacts } from "../../redux/selectors";

import { Form } from "./ContactForm.styled";

const PHONE_CHARS = /^\+?[\d\s()-]+$/;

const validate = (name, number, contacts) => {
  const errors = {};
  const trimmedName = name.trim();
  const trimmedNumber = number.trim();

  if (!trimmedName) {
    errors.name = "Name is required";
  } else if (
    contacts.some(
      (c) => c.name.trim().toLowerCase() === trimmedName.toLowerCase(),
    )
  ) {
    errors.name = `${trimmedName} is already in contacts`;
  }

  if (!trimmedNumber) {
    errors.number = "Phone is required";
  } else {
    const digits = trimmedNumber.replace(/\D/g, "");
    if (
      !PHONE_CHARS.test(trimmedNumber) ||
      digits.length < 7 ||
      digits.length > 15
    ) {
      errors.number = "Enter a valid phone, e.g. +380 50 123 45 67";
    }
  }

  return errors;
};

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate(name, number, contacts);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    dispatch(addContact({ name: name.trim(), number: number.trim() }));

    setName("");
    setNumber("");
  };

  const handleName = (event) => {
    setName(event.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
    if (errors.number) setErrors((prev) => ({ ...prev, number: undefined }));
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormField
        label="Name"
        name="name"
        value={name}
        onChange={handleName}
        error={errors.name}
        autoComplete="off"
      />
      <FormField
        label="Phone"
        name="number"
        type="tel"
        value={number}
        onChange={handleNumber}
        error={errors.number}
        autoComplete="off"
        placeholder="+380 50 123 45 67"
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
