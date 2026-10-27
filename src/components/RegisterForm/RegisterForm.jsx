import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";

import { register } from "../../redux/auth/operations";
import { clearAuthError } from "../../redux/auth/slice";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";

import { Form, FormError } from "./RegisterForm.styled";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = ({ name, email, password }) => {
  const errors = {};

  if (!name.trim()) errors.name = "Name is required";

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Enter a valid email, e.g. mango@mail.com";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 7) {
    errors.password = "Password must be at least 7 characters";
  }

  return errors;
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);
  const isLoading = useSelector(selectAuthLoading);

  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  // Прибираємо стару помилку, що могла лишитися зі сторінки логіна
  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (authError) dispatch(clearAuthError());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    dispatch(
      register({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password,
      }),
    );
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormField
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        autoComplete="name"
        placeholder="Adrian Cross"
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        autoComplete="email"
        placeholder="mango@mail.com"
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
        autoComplete="new-password"
        placeholder="At least 7 characters"
      />

      {authError && <FormError role="alert">{authError}</FormError>}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Register"}
      </Button>
    </Form>
  );
};
